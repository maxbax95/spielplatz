const STORAGE_KEY = "bewerbungstracker.applications";

const form = document.querySelector("#applicationForm");
const applicationIdInput = document.querySelector("#applicationId");
const jobTitleInput = document.querySelector("#jobTitle");
const companyInput = document.querySelector("#company");
const sourceInput = document.querySelector("#source");
const jobLinkInput = document.querySelector("#jobLink");
const statusInput = document.querySelector("#status");
const notesInput = document.querySelector("#notes");
const submitButton = document.querySelector("#submitButton");
const cancelEditButton = document.querySelector("#cancelEditButton");
const applicationsList = document.querySelector("#applicationsList");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const statusFilter = document.querySelector("#statusFilter");
const totalApplications = document.querySelector("#totalApplications");
const activeCount = document.querySelector("#activeCount");
const interviewCount = document.querySelector("#interviewCount");
const offerCount = document.querySelector("#offerCount");

let applications = loadApplications();

form.addEventListener("submit", handleSubmit);
cancelEditButton.addEventListener("click", resetForm);
searchInput.addEventListener("input", renderApplications);
statusFilter.addEventListener("change", renderApplications);

renderApplications();

function handleSubmit(event) {
  event.preventDefault();

  const entry = {
    id: applicationIdInput.value || createId(),
    jobTitle: jobTitleInput.value,
    company: companyInput.value.trim(),
    source: sourceInput.value.trim(),
    jobLink: jobLinkInput.value.trim(),
    status: statusInput.value,
    notes: notesInput.value.trim(),
    updatedAt: new Date().toISOString(),
  };

  if (applicationIdInput.value) {
    applications = applications.map((application) =>
      application.id === entry.id ? { ...application, ...entry } : application
    );
  } else {
    applications.unshift({ ...entry, createdAt: new Date().toISOString() });
  }

  saveApplications();
  resetForm();
  renderApplications();
}

function renderApplications() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedStatus = statusFilter.value;
  const filteredApplications = applications.filter((application) => {
    const matchesSearch = [
      application.jobTitle,
      application.company,
      application.source,
      application.status,
      application.notes,
    ]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm);
    const matchesStatus = selectedStatus === "Alle" || application.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  applicationsList.innerHTML = "";
  filteredApplications.forEach((application) => {
    applicationsList.append(createApplicationCard(application));
  });

  emptyState.classList.toggle("hidden", filteredApplications.length > 0);
  applicationsList.classList.toggle("hidden", filteredApplications.length === 0);
  updateStats();
}

function createApplicationCard(application) {
  const card = document.createElement("article");
  card.className = "application-card";

  const content = document.createElement("div");
  content.innerHTML = `
    <div class="card-title">
      <h3>${escapeHtml(application.company)}</h3>
      <span class="badge">${escapeHtml(application.status)}</span>
    </div>
    <div class="meta">
      <span>${escapeHtml(application.jobTitle)}</span>
      <span>${escapeHtml(application.source)}</span>
      <a href="${escapeAttribute(application.jobLink)}" target="_blank" rel="noreferrer">Stellenanzeige öffnen</a>
    </div>
    ${application.notes ? `<p class="notes">${escapeHtml(application.notes)}</p>` : ""}
  `;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const editButton = document.createElement("button");
  editButton.className = "card-button";
  editButton.type = "button";
  editButton.textContent = "Bearbeiten";
  editButton.addEventListener("click", () => startEdit(application.id));

  const deleteButton = document.createElement("button");
  deleteButton.className = "card-button delete";
  deleteButton.type = "button";
  deleteButton.textContent = "Löschen";
  deleteButton.addEventListener("click", () => deleteApplication(application.id));

  actions.append(editButton, deleteButton);
  card.append(content, actions);

  return card;
}

function startEdit(id) {
  const application = applications.find((item) => item.id === id);
  if (!application) return;

  applicationIdInput.value = application.id;
  jobTitleInput.value = application.jobTitle;
  companyInput.value = application.company;
  sourceInput.value = application.source;
  jobLinkInput.value = application.jobLink;
  statusInput.value = application.status;
  notesInput.value = application.notes || "";
  submitButton.textContent = "Änderungen speichern";
  cancelEditButton.classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteApplication(id) {
  const application = applications.find((item) => item.id === id);
  if (!application) return;

  const shouldDelete = confirm(`Bewerbung bei ${application.company} wirklich löschen?`);
  if (!shouldDelete) return;

  applications = applications.filter((item) => item.id !== id);
  saveApplications();
  renderApplications();
}

function updateStats() {
  const activeStatuses = ["Beworben", "Keine Rückmeldung", "Einladung Vorstellungsgespräch", "1. Runde", "2. Runde"];
  const interviewStatuses = ["Einladung Vorstellungsgespräch", "1. Runde", "2. Runde"];

  totalApplications.textContent = applications.length;
  activeCount.textContent = applications.filter((item) => activeStatuses.includes(item.status)).length;
  interviewCount.textContent = applications.filter((item) => interviewStatuses.includes(item.status)).length;
  offerCount.textContent = applications.filter((item) => item.status === "Zugesagt").length;
}

function resetForm() {
  form.reset();
  applicationIdInput.value = "";
  statusInput.value = "Beworben";
  submitButton.textContent = "Bewerbung speichern";
  cancelEditButton.classList.add("hidden");
}

function loadApplications() {
  const storedApplications = localStorage.getItem(STORAGE_KEY);
  if (!storedApplications) return [];

  try {
    return JSON.parse(storedApplications);
  } catch {
    return [];
  }
}

function saveApplications() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
}

function createId() {
  if (window.crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

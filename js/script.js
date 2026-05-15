const tabActive = ["bg-navy", "border-navy", "text-white"];
const tabInactive = ["bg-transparent", "text-slate-700", "border-slate-200"];

const allContainer = document.getElementById("allContainer");
const openContainer = document.getElementById("openContainer");
const closeContainer = document.getElementById("closeContainer");

const totalStat = document.getElementById("stat-total");
const openStat = document.getElementById("stat-open");
const closeStat = document.getElementById("stat-close");
const availableStat = document.getElementById("available");

const totalIssues = document.getElementById("totalIssues");
const noissue = document.getElementById("noissue");
const searchBtn = document.getElementById("searchBtn");
const loading = document.getElementById("loading");

let currentTab = "all";
let allIssues = [];

loading.classList.add("hidden");


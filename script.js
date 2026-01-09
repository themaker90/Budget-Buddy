let totalIncome = 0;
let totalExpenses = 0;

function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.add('hidden');
    });
    document.getElementById(tabId).classList.remove('hidden');
}

function updateDashboard() {
    document.getElementById("totalIncome").innerText = `$${totalIncome}`;
    document.getElementById("totalExpenses").innerText = `$${totalExpenses}`;
    document.getElementById("balance").innerText = `$${totalIncome - totalExpenses}`;
}

function addExpense() {
    const desc = document.getElementById("expenseDesc").value;
    const amount = Number(document.getElementById("expenseAmount").value);

    if (!desc || !amount) return;

    totalExpenses += amount;
    updateDashboard();

    const li = document.createElement("li");
    li.innerText = `${desc} - $${amount}`;
    document.getElementById("expenseList").appendChild(li);
}

function addIncome() {
    const source = document.getElementById("incomeSource").value;
    const amount = Number(document.getElementById("incomeAmount").value);

    if (!source || !amount) return;

    totalIncome += amount;
    updateDashboard();

    const li = document.createElement("li");
    li.innerText = `${source} - $${amount}`;
    document.getElementById("incomeList").appendChild(li);
}

function updateSavings() {
    const goal = Number(document.getElementById("goalAmount").value);
    const saved = Number(document.getElementById("savedAmount").value);

    if (!goal || !saved) return;

    const percent = Math.min((saved / goal) * 100, 100);
    document.getElementById("progressBar").style.width = percent + "%";
    document.getElementById("savingsText").innerText =
        `You have saved ${percent.toFixed(1)}% of your goal`;
}

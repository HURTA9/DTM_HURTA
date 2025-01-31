// サーバーからTODOリストを取得し、グリッドに表示
async function fetchTodos() {
    // const response = await fetch('/todos');
    // const todos = await response.json();
    // const tableBody = document.getElementById("todoTableBody");

    // tableBody.innerHTML = ""; // テーブルをリセット

    // todos.forEach(todo => {
    //     const row = document.createElement("tr");
    //     row.dataset.id = todo.id;

    //     // ステータス: チェックボックス
    //     const statusCheckbox = `<input type="checkbox" ${todo.status === "完了" ? "checked" : ""} onclick="updateStatus(${todo.id})">`;

    //     // 日付: 日付入力（インピッカー）
    //     const dateInput = `<input type="date" value="${todo.date || ''}" onchange="updateDate(${todo.id}, this.value)">`;

    //     // 内容: 文字列
    //     const taskText = `${todo.task}`;

    //     // 削除ボタン
    //     const deleteButton = `<button onclick="deleteTodo(${todo.id})">削除</button>`;

    //     row.innerHTML = `
    //         <td>${statusCheckbox}</td>
    //         <td>${dateInput}</td>
    //         <td>${taskText}</td>
    //         <td>${deleteButton}</td>
    //     `;

    //     tableBody.appendChild(row);
    // });
}

// TODOを追加する関数
async function addTodo() {
    // const task = document.getElementById("schedule").value;
    // if (!task) return alert("TODOを入力してください");

    // await fetch('/todos', {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ task, status: "未完了", date: new Date().toISOString().split("T")[0] })
    // });

    // document.getElementById("schedule").value = "";
    // fetchTodos();
}

// TODOを削除する関数
async function deleteTodo(id) {
    await fetch(`/todos/${id}`, { method: "DELETE" });
    fetchTodos();
}

// ステータスを更新する関数
async function updateStatus(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);
    const checkbox = row.querySelector('input[type="checkbox"]');
    const newStatus = checkbox.checked ? "完了" : "未完了";

    await fetch(`/todos/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
    });
}

// 日付を更新する関数
async function updateDate(id, newDate) {
    await fetch(`/todos/${id}/date`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: newDate })
    });
}

// ページ読み込み時にTODOを取得
//document.addEventListener("DOMContentLoaded", fetchTodos);
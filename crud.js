import { db } from "./firebase.js";
import { ref, push, onValue, update, remove } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js";

export function addItem(text) {
    const txt = text.trim();
    if (!txt) return;
    return push(ref(db, "items"), { text: txt });
};

export function listenItems(callback) {
    onValue(ref(db, "items"), (snapshot) => {
        const items = [];
        snapshot.forEach((child) => {
            items.push({ id: child.key, text: child.val().text});
        });
        callback(items);
    });
};

export function updateItem(id, text) {
    const txt = text.trim();
    if (!txt) return;
    return update(ref(db, `items/${id}`), { text: txt });
};

export function removeItem(id) {
    return remove(ref(db, `items/${id}`));
};
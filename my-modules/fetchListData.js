export const fetchListData = async (getDocs, collection, db, query, orderBy) => {
    let tags = "";
    const q = query(collection(db, "customers"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    const timestamp = doc.data().date.toDate();
    const dueDate = `${timestamp.getFullYear()}/${timestamp.getMonth()+1}/${timestamp.getDate()} ${timestamp.getHours()}:${timestamp.getMinutes().toString().padStart(2, "0")}`
    tags += `<tr><td>${dueDate}</td><td>${doc.data().name}</td><td>${doc.data().class}</td><td>${doc.data().tel}</td><td>${doc.data().member}</td></tr>`
    });
    document.getElementById("js-list").innerHTML = tags;
};
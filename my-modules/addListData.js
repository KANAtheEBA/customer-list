export const addListData = async (e, addDoc, collection, db) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    try {
      const docRef = await addDoc(collection(db, "customers"), {
        date: new Date(),
        name: formData.get("name"),
        class: formData.get("class"),
        tel: formData.get("tel"),
        member: formData.get("member")
      });
      console.log("Document written with ID: ", docRef.id);
    } catch(e) {
      console.error("Error adding document: ", e)
    }
  }
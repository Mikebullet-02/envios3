import { collection, getDocs, query } from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { db } from "../../firebaseConfig";

export const userDatabaseStore = defineStore("database", {
  state: () => {
    return {
      documents: [],
    };
  },
  actions: {
    async getOrigenes() {
      try {
        const q = query(collection(db, "origenes", "Aguascalientes", "Destinos")); //todos los docus
      //const q = query(collection(db, "origenes", "Aguascalientes", "Destinos")); // docu, colección y docu
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        this.documents.push({ id: doc.id, data: doc.data() });
        console.log(doc.id, '=>', doc.data())
       });
      console.log("SEPARACIÓN")
      } catch (error) {
        console.log(error);
      }
    },
    async getDestinos(){
      try{
      const q = query(collection(db, "origenes", "Pachuca", "Destinos")); // docu, colección y docu
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.documents.push({ id: doc.id, data: doc.data() });
      //  console.log( doc.data()._id, '=>', doc.data().sobre)
      });
   console.log("SEPARACIÓN")
      } catch(error){
        console.log(error)
      }
    },
    
  },
});

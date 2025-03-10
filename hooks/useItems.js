import { useState, useEffect } from "react";
import {
  firestore,
  addDoc,
  deleteDoc,
  collection,
  onSnapshot,
  query,
  ITEMS,
  serverTimestamp,
  orderBy,
  doc,
  getAuth,
  USERS,
} from "../firebase/Config";

const useItems = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUid(user.uid);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!uid) return;
    setError(null);
    setIsLoading(true);
    try {
      const q = query(
        collection(firestore, USERS, uid, ITEMS),
        orderBy("createdAt", "desc")
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tempItems = [];
        querySnapshot.forEach((doc) => {
          tempItems.push({ ...doc.data(), id: doc.id });
        });
        setItems(tempItems);
      });
      return () => {
        unsubscribe();
      };
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [uid]);

  const addItem = async () => {
    if (!uid || !input.trim()) return;

    const newItem = {
      name: input,
      createdAt: serverTimestamp(),
    };
    try {
      await addDoc(collection(firestore, USERS, uid, ITEMS), newItem);
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    if (!uid) return;
    try {
      await deleteDoc(doc(firestore, USERS, uid, ITEMS, id));
    } catch (error) {
      console.log(error);
    }
  };

  return { items, error, isLoading, addItem, removeItem, input, setInput };
};
export default useItems;

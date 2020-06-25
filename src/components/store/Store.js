import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import uniqueId from "lodash/uniqueId";

export const counterContext = createContext();

export const CounterProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    items: [],
    item: {
      id: uniqueId(),
      name: "",
      value: "",
      placeholder: "",
    },

    addItem(name, value, placeholder) {
      store.items.push({
        id: uniqueId(),
        name: name,
        value: value,
        placeholder: placeholder,
      });
    },

    getItemById(id) {
      return store.items.find((h) => {
        return h.id === id;
      });
    },

    getIndexById(id) {
      return store.items.findIndex((h) => h.id === id);
    },

    removeItem(id) {
      store.items = store.items.filter((h) => h.id !== id);
    },

    changeValue(index, newValue) {
      store.items[index].value = newValue;
    },
    
    print() {
      store.items.map((h) => {
        console.log(h.value);
      });
    },
  }));

  return (
    <counterContext.Provider value={store}>{children}</counterContext.Provider>
  );
};

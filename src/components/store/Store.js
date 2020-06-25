import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import uniqueId from "lodash/uniqueId";
import "mobx-react-lite/batchingForReactDom";

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
    itemCss: `.item {
  color: #333;
  transition: all 0.3s ease-in;
}`,
    containerCss: `.container {
  transition: all 0.3s ease-in;
}`,

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

    getString() {
      return store.items.map((el) => `${el.name}(${el.value})`).join(" ");
    },
  }));

  return (
    <counterContext.Provider value={store}>{children}</counterContext.Provider>
  );
};
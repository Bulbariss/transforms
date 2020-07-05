import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import uniqueId from "lodash/uniqueId";
import "mobx-react-lite/batchingForReactDom";

export const appContext = createContext();

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
  transition: all 0.3s ease-in;
}`,
    containerCss: `.container {
  transform-origin: center center;
  height: calc(100vh - 7rem);
  max-height: 900px;
  
  @media (max-width: 640px) {
    .container {
       height: calc(80vh - 7rem); 
    }
  }
}`,

    addItem(name, value, placeholder, regex) {
      store.items.push({
        id: uniqueId(),
        name: name,
        value: value,
        placeholder: placeholder,
        regex: regex,
      });
      // setCookie("items", store.items, 365);
    },

    getItemById(id) {
      return store.items.find((h) => {
        return h.id === id;
      });
    },

    // getItemsFromLS() {
    //   let a = JSON.parse(localStorage.getItem("length"));
    //   // let b = a.map((i) => localStorage.getItem(i));
    // },

    getIndexById(id) {
      return store.items.findIndex((h) => h.id === id);
    },

    removeItem(id) {
      store.items = store.items.filter((h) => h.id !== id);
      // setCookie("items", store.items, 365);
    },

    changeValue(index, newValue) {
      store.items[index].value = newValue;
    },

    getString() {
      return store.items.map((el) => `${el.name}(${el.value})`).join(" ");
    },
  }));

  return <appContext.Provider value={store}>{children}</appContext.Provider>;
};

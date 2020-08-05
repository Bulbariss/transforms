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
  perspective: 550px;
  transform-style: preserve-3d;
}`,
    containerCss: `.container {
  max-height: 900px;
  min-height: 400px;
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

    writeToLS() {
      let names = [];
      // let ids = [];
      let values = [];
      let placeholders = [];
      let regexs = [];
      store.items.map((item) => {
        names.push(item["name"]);
        // ids.push(item["id"]);
        values.push(item["value"]);
        placeholders.push(item["placeholder"]);
        regexs.push(item["regex"]);
      });
      if (typeof window !== "undefined") {
        localStorage.setItem("names", JSON.stringify(names));
        localStorage.setItem("values", JSON.stringify(values));
        localStorage.setItem("placeholders", JSON.stringify(placeholders));
        localStorage.setItem("regexs", JSON.stringify(regexs));
      }
    },
    deleteItemsFromLS() {
      if (typeof window !== "undefined") {
        localStorage.removeItem("names");
        localStorage.removeItem("values");
        localStorage.removeItem("placeholders");
        localStorage.removeItem("regexs");
      }
    },

    writeValuesToLS() {
      let values = [];
      store.items.map((item) => {
        values.push(item["value"]);
      });
      if (typeof window !== "undefined") {
        localStorage.setItem("values", JSON.stringify(values));
      }
    },

    writeContainerCss() {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "containerCss",
          JSON.stringify(store.containerCss)
        );
      }
    },
    writeItemCss() {
      if (typeof window !== "undefined") {
        localStorage.setItem("itemCss", JSON.stringify(store.itemCss));
      }
    },
    deleteContainerCss() {
      if (typeof window !== "undefined") {
        localStorage.removeItem("containerCss");
      }
    },
    deleteItemCss() {
      if (typeof window !== "undefined") {
        localStorage.removeItem("itemCss");
      }
    },

    readLS() {
      if (typeof window !== "undefined") {
        if (localStorage.getItem("names")) {
          for (
            let i = 0;
            i < JSON.parse(localStorage.getItem("names")).length;
            i++
          ) {
            store.items.push({
              // id: JSON.parse(localStorage.getItem("ids"))[i],
              id: uniqueId(),
              name: JSON.parse(localStorage.getItem("names"))[i],
              value: JSON.parse(localStorage.getItem("values"))[i],
              placeholder: JSON.parse(localStorage.getItem("placeholders"))[i],
              regex: JSON.parse(localStorage.getItem("regexs"))[i],
            });
          }
        }
        if (localStorage.getItem("containerCss")) {
          store.containerCss = JSON.parse(localStorage.getItem("containerCss"));
        }
        if (localStorage.getItem("itemCss")) {
          store.itemCss = JSON.parse(localStorage.getItem("itemCss"));
        }
      }
    },
  }));

  return <appContext.Provider value={store}>{children}</appContext.Provider>;
};

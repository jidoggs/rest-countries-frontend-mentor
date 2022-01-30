import IsLoadingIcon from "../static/images/IsLoading";
export const displayAll = (obj) => {
  const result = [];

  for (const key in obj) {
    const element = obj[key];

    if (typeof element === "object") {
      for (const keyn in element) {
        if (keyn !== "symbol") {
          const innerElement = element[keyn];
          result.push(innerElement);
        }
      }
    } else {
      result.push(element);
    }
  }

  return result.join(", ");
};

export const displayOne = (obj) => {
  const result = [];
  for (const key in obj) {
    const element = obj[key];

    if (typeof element === "object" && Array.isArray(element) === false) {
      for (const yek in element) {
        const innerElement = element[yek];
        if (yek !== "official") {
          result.push(innerElement);
        }
      }
    }
  }

  return result[Math.floor(Math.random() * result.length)];
};

export const dataIsLoading = () => {
  return (
    <div className="isLoading">
      <h1 className="isLoading__text">loading...</h1>
      <IsLoadingIcon className="isLoading__icon" />
    </div>
  );
};

export const checkYourNetwork = () => (
  <h1 className="isNetworkError">
    Please Check your internet Connection and then refresh this page
  </h1>
);

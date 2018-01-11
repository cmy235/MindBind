
export const searchCategories = (query) => {
  debugger
  return $.ajax({
    url: "/categories/search",
    dataType: "json",
    method: "get",
    data: { query }
  });
};


export const searchCategories = query => {
  debugger
  return $.ajax({
    url: "/api/search",
    dataType: "json",
    method: "get",
    data: query
  });
};


export const searchCategories = query => {

  return $.ajax({
    url: "/api/search",
    dataType: "json",
    method: "get",
    data: query
  });
};

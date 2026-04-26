export const success = (data: any, message = "Success") => {
  return {
    status: "success",
    message,
    data
  };
};

export const error = (message = "Error", details: any = null) => {
  return {
    status: "error",
    message,
    details
  };
};

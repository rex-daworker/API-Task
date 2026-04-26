export const success = (data: any, message = "Success") => ({
  status: "success",
  message,
  data
});

export const error = (message = "Error", details: any = null) => ({
  status: "error",
  message,
  details
});

const debugLog = (message: any, source?: string, isError: boolean = false) => {
  if (process.env.NODE_ENV === "development") {
    if (source) {
      console.log("=============================================");
      console.log("Trigger by: ", source);
    }

    if (isError) {
      console.error(message);
    } else {
      console.log(message);
    }

    if (source) {
      console.log("=============================================");
    }
  }
};

export default debugLog;

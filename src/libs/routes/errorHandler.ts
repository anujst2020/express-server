export let errorHandler = function (code): object{
    return {
            error: "Not Found",
            message: "error",
            status: code,
            timestamp: new Date()
        };
};
export const postUser = (userData) => fetch('/contact/details',{
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
})
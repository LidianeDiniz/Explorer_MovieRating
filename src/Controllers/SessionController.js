class SessionController {

    async create(request, response){
        const { email, password } = request.body

        console.log({ email, password })

        return response.json({ email, password })
    }
}

module.exports = SessionController
import accountRepository from "../repositors/account.repository"

const getAccount = async () => {
    try {
        const result = await accountRepository.getAccount()
        return result
    } catch (error) {
        throw error
    }
}

export default {
    getAccount
}
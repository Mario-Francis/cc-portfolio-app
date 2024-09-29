import axios from "axios";
import Mail from "../types/Mail";
import { useMutation } from "@tanstack/react-query";

export const sendMail = () => {
    return useMutation<Mail, Error, any>({
        mutationKey: ['send-mail'],
        mutationFn: (mail: Mail) => {
            const _url = 'https://c0rnse4ubb.execute-api.us-east-1.amazonaws.com/dev/api/mails/send';
            return axios.post<Mail, any>(_url, mail)
        }
    });
}
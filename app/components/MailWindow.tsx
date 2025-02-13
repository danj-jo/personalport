import {Form} from "@remix-run/react";

export const MailWindow = () => {
return (
    <Form method="POST">
        <input type="email" placeholder="email"/>
        <input type="text" placeholder="subject"/>
        <input type="text" placeholder="message"/>
    </Form>
)
}
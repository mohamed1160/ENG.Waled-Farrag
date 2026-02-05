import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function PasswordModal({ isOpen, onClose, onLogin }) {
    if (!isOpen) return null;

    const schema = Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
    });

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" onClick={onClose}>
            <div className="bg-gray-900 p-6 rounded-lg w-[300px] flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-lg font-bold text-white">Login</h2>

                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={schema}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            const res = await axios.post("http://localhost:1337/api/auth/local", {
                                identifier: values.username,
                                password: values.password,
                            });

                            const { jwt } = res.data;

                            if (jwt) {
                                localStorage.setItem("jwt", jwt);
                                // localStorage.setItem("userId", user.id);
                                onLogin(); // هنبعتها للفوتر عشان navigate
                                onClose();
                            }
                        } catch (err) {
                            alert("Username or password incorrect");
                        } finally {
                            setSubmitting(false);
                        }
                    }}>
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col gap-3">
                            <div>
                                <Field name="username" placeholder="Username" className="border p-2 rounded w-full bg-gray-800 text-white border-gray-600" />
                                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <Field type="password" name="password" placeholder="Password" className="border p-2 rounded w-full bg-gray-800 text-white border-gray-600" />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="flex justify-end gap-2 mt-2">
                                <button type="button" onClick={onClose} className="text-gray-300 px-3 py-1 rounded hover:bg-gray-700">
                                    Cancel
                                </button>
                                <button type="submit" disabled={isSubmitting} className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">
                                    {isSubmitting ? "Logging in..." : "Login"}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

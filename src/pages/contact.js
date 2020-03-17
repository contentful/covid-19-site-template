import React from 'react'
import Layout from '../components/layout'
import SiteMeta from '../components/siteMeta'
import useI18n from '../hooks/use-i18n'

const ContactPage = () => {
  const i18n = useI18n()

  const pageTitle = i18n.get('contact-us', { default: 'Contact Us' })

  return (
    <Layout>
      <SiteMeta title={pageTitle} />
      <h1 className="text-2xl font-semibold">{pageTitle}</h1>
      <form
        method="post"
        name="contact"
        netlify-honeypot="bot-field"
        data-netlify="true"
        className="w-full max-w-lg mt-8"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="grid-first-name"
            >
              {i18n.get('first-name', 'First Name')}
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="first_name"
            />
            <p className="text-xs italic text-red-500"></p>
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="grid-last-name"
            >
              {i18n.get('last-name', 'Last Name')}
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              name="last_name"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="grid-password"
            >
              {i18n.get('email', 'Email')}
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              type="name"
            />
            <p className="text-xs italic text-gray-600">
              {i18n.get('email-example', { default: 'em@example.com' })}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="grid-password"
            >
              {i18n.get('message', { default: 'Message' })}
            </label>
            <textarea
              className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              name="message"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              {i18n.get('send-button', { default: 'Send' })}
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </Layout>
  )
}

export default ContactPage

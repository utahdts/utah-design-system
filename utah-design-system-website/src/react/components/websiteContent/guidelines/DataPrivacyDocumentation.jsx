import { useCallback, useState } from 'react';
import { Button, ExternalLink, Modal, ModalContent, ModalFooter, ModalTitle, joinClassNames } from '@utahdts/utah-design-system';
import { NavLink } from 'react-router-dom';
import { pageUrls } from '../../routing/pageUrls';

export function DataPrivacyDocumentation() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = useCallback(() => setShowModal(false), [setShowModal]);
  const openModal = useCallback(() => setShowModal(true), [setShowModal]);

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Data Privacy</h1>
      <p className="lead-in">
        A privacy policy typically addresses an agency&apos;s commitment to
        compliance with ensuring transparency in data practices.
      </p>
      <hr />
      <h2 id="section-areas-to-consider" className="mt-spacing mb-spacing">
        Areas to Consider
      </h2>
      <p className="mb-spacing">
        In the state of Utah, agencies utilize <code>privacy policies</code> and{' '}
        <code>terms of use</code> to establish clear guidelines and expectations
        for individuals interacting with their online platforms and services.
      </p>
      <p>
        These documents play a crucial role in safeguarding the privacy of users
        by outlining how personal information is collected, used, and protected.
      </p>
      <p>
        By implementing these policies, Utah state agencies aim to foster trust,
        protect user rights, and ensure a secure and accountable digital
        environment for individuals engaging with government services online.
      </p>
      <p>
        For more information, please refer to the state of Utah{' '}
        <ExternalLink href="https://www.utah.gov/support/privacypolicy.html">
          Privacy Policy
        </ExternalLink>
        .
      </p>

      <h2 id="footer-links">Customize Footer Links</h2>
      <p>
        Note: The Utah Footer offers a way for developers to customize the{' '}
        <NavLink to={`${pageUrls.utahFooter}#section-config-custom-links`}>
          privacy policy and/or terms of use links
        </NavLink>
        .
      </p>

      <h2 id="form-privacy">
        Form example
      </h2>
      <p>
        Below is an example of a &quot;Notice of Collection / Data
        Privacy&quot;, where information about how the form data will be used,
        how long the data will be retained, and what will happen if the user
        chooses to opt out of the data collection.
      </p>
      <p className="mb-auto">
        To enhance the user experience the Utah Design System suggests the
        following:
      </p>
      <ul>
        <li>
          Consistent placement of the data collection link. (At the top of the
          form)
        </li>
        <li>Consistent iconography to enhance trust.</li>
        <li>
          Consistent wording for the link so that visitors will gain a quicker
          understanding of what to expect.
        </li>
        <li>
          Visitors can be presented with the information in a variety of ways: link to another page, popup message, popup modal.
          We have chosen to present a popup modal in this example.
        </li>
      </ul>
      <hr className="mt-spacing" />
      <div className="static-example mt-spacing-l">
        <div className="static-example__component-wrapper">
          <div style={{ width: '70%' }}>
            <div className="flex items-center justify-center mb-spacing-l">
              <span className="flex items-center">
                <span className="utds-icon-before-policy" aria-hidden="true" />
                <span className="visually-hidden">policy</span>
              </span>
              <a
                href="#privacy"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setShowModal(!showModal);
                }}
              >
                Notice of Collection / Data Privacy
              </a>
            </div>
            <h2>Example Form</h2>
            <p>This is an example form where a user will need to fill out the following form in order to the next step in the process.</p>
            <form autoComplete="off">
              <label htmlFor="name">What is your name?</label>
              <input type="text" id="first-name" className="mb-spacing" />
              <label htmlFor="quest">What is your quest?</label>
              <input type="text" id="quest" className="mb-spacing" />
              <label htmlFor="mesopotamia">What is the capitol of Mesopotamia?</label>
              <input type="text" id="mesopotamia" className="mb-spacing" />
              <label htmlFor="favorite-color">What is your favorite color?</label>
              <input type="text" id="favorite-color" className="mb-spacing" />
              <label htmlFor="air-speed">What is the air speed velocity of a swallow carrying a coconut?</label>
              <input type="text" id="air-speed" className="mb-spacing" />
              <div className="flex justify-end mb-spacing">
                <button type="button" className="button--primary-color button--solid">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showModal
        ? (
          <Modal
            ariaLabelledBy="modal-example-render-title"
            className={joinClassNames('modal--medium')}
            id="modal-example-render"
            onClose={closeModal}
            onEscape={closeModal}
          >
            <ModalTitle id="modal-example-render-title">
              <span
                // @ts-ignore
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex="0"
              >
                Notice of Collection / Data Privacy
              </span>
            </ModalTitle>
            <ModalContent id="modal-example-render-content">
              <div style={{ maxHeight: '300px', overflow: 'auto' }}>
                <p>
                  We are collecting the information on this form to [insert reason for collecting the data, e.g.,
                  &quot;enhance your user experience, process your application, or fulfill legal requirements&quot;]. The data
                  you provide will be used specifically for [insert how the data will be used, e.g., &quot;processing your
                  request, improving our services, or contacting you regarding your submission&quot;].
                </p>
                <p>
                  Your data will be securely stored and retained for [insert retention period, e.g., &quot;as long as necessary
                  to fulfill the purposes outlined or as required by law,&quot; or &quot;a period of six months after your interaction
                  with our services is complete&quot;]. After this period, your data will be permanently deleted from our systems.
                </p>
                <p>
                  Please note that providing this information is voluntary. However, if you choose not to fill out the
                  form, [insert consequence of not filling out the form, e.g., &quot;we may not be able to process your request
                  or provide you with the desired services&quot;, &quot;you may be thrown into the pit of despair&quot;].
                </p>
              </div>
            </ModalContent>
            <ModalFooter className="flex float-right flex-wrap" id="modal-example-render-footer">
              <Button
                className="button--solid button--primary-color"
                onClick={closeModal}
              >
                Okay
              </Button>
            </ModalFooter>
          </Modal>
        )
        : undefined}
    </div>
  );
}

import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
  return (
    <div className="container blogs">
      <h1 className="text-center mb-4">Blog</h1>
      <div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Difference between authorization and authentication?
            </Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Authorization</th>
                    <th>Authentication</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>It is done before the authorization process</td>
                    <td>
                      While this process is done after the authentication
                      process
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Authentication verifies who the user is</td>
                    <td>
                      Authorization determines what resources a user can access
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      Authentication is visible to and partially changeable by
                      the user
                    </td>
                    <td>
                      Authorization isn’t visible to or changeable by the user
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </Accordion.Header>
            <Accordion.Body>
              Firebase gives us functionality like analytics, databases,
              messaging and crash reporting so we can move quickly and focus on
              our users. Firebase is built on Google infrastructure and scales
              automatically, for even the largest apps.
              <br />
              It's makes it easier to get your users signed-in without having to
              understand the complexities behind implementing your own
              authentication system.
              <br />
              <br />
              <strong>
                Here have 12 options for implement authentication at firebase.
                They are -
              </strong>
              <ul>
                <li>Email/Password</li>
                <li>Google</li>
                <li>Facebook</li>
                <li>Play Games</li>
                <li>Phone</li>
                <li>Game center</li>
                <li>Apple</li>
                <li>Github</li>
                <li>Anonymous</li>
                <li>Microsoft</li>
                <li>Twitter</li>
                <li>Yahoo</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What other services does firebase provide other than
              authentication?
            </Accordion.Header>
            <Accordion.Body>
              <strong>
                There are many services which Firebase provides, Most useful of
                them are:
              </strong>
              <ul>
                <li>Cloud Firestore</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Predictions</li>
                <li>Cloud Messaging</li>
                <li>Dynamic Links</li>
                <li>Remote Config</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;

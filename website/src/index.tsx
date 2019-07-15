import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, Col, Grid, MenuItem, Panel, Row, SplitButton, FormGroup, ControlLabel, FormControl, OverlayTrigger, Tooltip, InputGroup, Clearfix } from 'react-bootstrap';
import { CodeExample } from './CodeExample';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { ColorCard } from './ColorCard';
import { Checkbox } from './Checkbox';
import { InputWithCheckbox } from './InputWithCheckbox';
import { Switch } from './Switch';

import 'codacy-stylesheets';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Grid>
        <Row>
          <Col xs={3} className="border-secondary-right">
            <Sidebar />
            <p><small> Version #1.0.38</small></p>
          </Col>
          <Col xs={9}>
            <a
              id="logs_open"
              className="margin-left-xs font-xs"
              data-toggle="modal"
              href="#"
              data-target="#logsExample"
            >View logs</a
            >
            <div
              id="logsExample"
              className="modal right fade"
              tabIndex={-1}
              role="dialog"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div data-dismiss="modal" aria-label="Close" className="close">
                      <h2>View logs</h2>
                    </div>
                    <p className="text-secondary margin-bottom-xs">
                      <strong>Time to analyse: </strong> 00:00:36
                            </p>
                    <div className="panel panel-success panel-status">
                      <div
                        className="panel-heading"
                        data-toggle="collapse"
                        data-target="#success-log"
                      >
                        <div className="clearfix">
                          <div className="pull-left">
                            Preparing Source Code
                                </div>
                          <div className="pull-right">
                            00:00:08
                                </div>
                        </div>
                      </div>
                      <div id="success-log" className="panel-body collapse">
                        <pre className="log-stacktrace">@stackTrace</pre>
                      </div>
                    </div>

                    <div className="panel panel-danger panel-status">
                      <div
                        className="panel-heading"
                        data-toggle="collapse"
                      // href="#danger-log"
                      >
                        <div className="clearfix">
                          <div className="pull-left">
                            Preparing Source Code
                                                    </div>
                          <div className="pull-right">
                            00:00:08
                                                    </div>
                        </div>
                      </div>
                      <div id="danger-log" className="panel-body collapse">
                        <p className="message-error">
                          An error occurred during this step. Please,
                                <a href="#">retry your analysis</a> or
                                <a href="#">contact support.</a>
                        </p>
                        <pre className="log-stacktrace">@stackTrace</pre>
                      </div>
                    </div>
                    <div className="panel panel-success panel-status">
                      <div className="panel-heading">
                        <div className="clearfix">
                          <div className="pull-left">
                            Preparing Source Code
                                </div>
                          <div className="pull-right">
                            00:00:08
                                </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section id="colors">
              <h1>Colour Palette</h1>
              <Row>
                <Col xs={4}>
                  <ColorCard color="gray-base">
                    <code>$gray-base</code> is used for solid backgrounds and headlines.
                  </ColorCard>
                </Col>
                <Col xs={4}>
                  <ColorCard color="gray-dark">
                    <code>$gray-dark</code> is used for body text.
                  </ColorCard>
                </Col>
                <Col xs={4}>
                  <ColorCard color="gray">
                    <code>$gray</code> is used for placeholder and additional text.
                  </ColorCard>
                </Col>
                <Col xs={4}>
                  <ColorCard color="gray-lighter">
                    <code>$gray-lighter</code> is used for light background, borders and separators.
                  </ColorCard>
                </Col>
                <Col xs={4}>
                  <ColorCard color="primary">
                    <code>$brand-primary</code> is used for buttons, links, inputs on focus.
                  </ColorCard>
                </Col>
                <Col xs={4}>
                  <ColorCard color="success">
                    <code>$brand-success</code> is used for successful status and feedback.
                  </ColorCard>
                </Col>
                <Col xs={4}>
                  <ColorCard color="warning">
                    <code>$brand-warning</code> is used for warning status.
                  </ColorCard>
                </Col>
                <Col xs={4}>
                  <ColorCard color="danger">
                    <code>$brand-danger</code> is used for error status and feedback.
                  </ColorCard>
                </Col>
              </Row>
            </section>

            <section id="typo">
              <h1>Typography</h1>
              <p> The main typeface is Clear sans. It should be used on every
                text in the application. If, for some reason, Clear sans is
                not rendered, the alternate typeface is Arial. </p>
              <Panel>
                <Panel.Body>
                  <h1>H1 header</h1>
                  <p>26px</p>
                  <pre>&lt;h1&gt;header&lt;/h1&gt;</pre>
                  <h2>H2 header</h2>
                  <p>22px</p>
                  <pre>&lt;h2&gt;header&lt;/h2&gt;</pre>
                  <h3>H3 header</h3>
                  <p>18px</p>
                  <pre>&lt;h3&gt;header&lt;/h3&gt;</pre>
                  <h4>H4 header</h4>
                  <p>16px</p>
                  <pre>&lt;h4&gt;header&lt;/h4&gt;</pre>
                  <h5>H5 header</h5>
                  <p>14px</p>
                  <pre>&lt;h5&gt;header&lt;/h5&gt;</pre>
                  <h6>h6 header</h6>
                  <p>12px</p>
                  <pre>&lt;h6&gt;header&lt;/h6&gt;</pre>

                  <h2>Paragraphs</h2>
                  <p> All paragraphs should be written inside a <code>&lt;p&gt;</code> tag. Ideally, on blocks of text,
                    the <code>&lt;strong&gt;</code> tag should be used to highlight important text, making readability easier.
                    Bellow there's an example of a block of text with a link.
                  </p>
                  <p>
                    Other styles can be used, such as<code>&lt;em&gt;</code> for <em>italic</em> and
                    <code>&lt;u&gt;</code> for <u>underline.</u>
                  </p>

                  <Panel>
                    <Panel.Body>
                      <p>The quick, brown fox jumps over a lazy dog. DJs flock
                        by when MTV ax quiz prog. Junk MTV <strong>quiz graced by fox whelps.</strong> Bawds jog,
                        flick quartz, vex nymphs. Waltz, bad nymph, for quick
                        jigs vex! Fox nymphs grab quick-jived waltz.
                        <strong>Brick quiz whangs</strong> jumpy veldt fox.
                        <a href="#">Bright vixens jump; dozy fowl quack.</a>
                        Quick wafting zephyrs vex bold Jim. Quick zephyrs
                        blow, vexing daft Jim.
                      </p>

                      <p>The quick, brown fox jumps over a lazy dog. <a href="#" target="_blank">Learn more</a>.</p>
                    </Panel.Body>
                  </Panel>

                  <p>For small prints, updates, conditions and copyrights, use the tag <code>&lt;small&gt;</code>.</p>

                  <Panel>
                    <Panel.Body>
                      <CodeExample>
                        <small>© 2016 - CODACY AUTOMATED CODE REVIEW</small>
                      </CodeExample>
                    </Panel.Body>
                  </Panel>

                  <h2>Utility classes</h2>
                  <p>Utility classes can be used as needed. Although, if many
                    elements in a container require the same utility class,
                    please create a parent class with the proper rule.
                  </p>

                  <div className="panel">
                    <div className="panel-body">
                      <h3>Alignment classes</h3>
                      <CodeExample>
                        <p className="text-left">Left aligned text.</p>
                        <p className="text-center">Center aligned text.</p>
                        <p className="text-right">Right aligned text.</p>
                        <p className="text-justify">Justified text.</p>
                        <p className="text-nowrap">No wrap text.</p>
                      </CodeExample>

                      <h3>Transformation classes</h3>
                      <CodeExample>
                        <p className="text-lowercase">Lowercased text.</p>
                        <p className="text-uppercase">Uppercased text.</p>
                        <p className="text-capitalize">Capitalized text.</p>
                      </CodeExample>

                      <h3>Abbreviation</h3>
                      <CodeExample>
                        <p>
                          An abbreviation of the word attribute is <abbr title="attribute">attr.</abbr>
                        </p>
                      </CodeExample>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </section>

            <section id="buttons">
              <h1>Buttons</h1>
              <p>Buttons are to be used whenever there's an action a user can
                make, therefore, there should be <strong>one primary button per page.</strong>
              </p>
              <p><code>bsStyle="default"</code> and <code>bsStyle="link"</code> are the
                only buttons that can repeatedly appear in a page and <strong>should not
                be used for primary or breaking actions.</strong>
              </p>
              <p>Buttons should be positioned on the left. When there's a group
                of buttons, the primary button stands on the far right.
              </p>

              <Panel>
                <Panel.Body>
                  <Row>
                    <Col xs={6}>
                      <CodeExample>
                        <Button bsStyle="default">Default</Button>
                      </CodeExample>
                      <CodeExample>
                        <Button bsStyle="primary">Primary</Button>
                      </CodeExample>
                      <CodeExample>
                        <Button bsStyle="link">Link</Button>
                      </CodeExample>
                      <CodeExample>
                        <Button bsStyle="success">Success</Button>
                      </CodeExample>
                      <CodeExample>
                        <Button bsStyle="danger">Danger</Button>
                      </CodeExample>
                    </Col>
                    <Col xs={6}>
                      <CodeExample>
                        <Button bsStyle="default" disabled={true}>Default disabled</Button>
                      </CodeExample>
                      <CodeExample>
                        <Button bsStyle="primary" disabled={true}>Primary disabled</Button>
                      </CodeExample>
                      <CodeExample>
                        <Button bsStyle="link" disabled={true}>Link disabled</Button>
                      </CodeExample>
                      <CodeExample>
                        <Button bsStyle="success" disabled={true}>Success disabled</Button>
                      </CodeExample>
                      <CodeExample>
                        <Button bsStyle="danger" disabled={true}>Danger disabled</Button>
                      </CodeExample>
                    </Col>
                  </Row>

                  <h2>Different sizes</h2>
                  <p>Some description here mentioning layout and position.</p>
                  <p>You can change the button size just by simply adding
                    <code>bsSize="lg"</code>, <code>bsSize="sm"</code>,
                    <code>bsSize="xs"</code> to the button properties.
                  </p>

                  <CodeExample>
                    <Button bsStyle="default" bsSize="lg">Lg button</Button>
                    <Button bsStyle="default">button</Button>
                    <Button bsStyle="default" bsSize="sm">Sm button</Button>
                    <Button bsStyle="default" bsSize="xs">Xs button</Button>
                  </CodeExample>

                  <h2>Button groups</h2>
                  <CodeExample>
                    <ButtonGroup>
                      <Button bsStyle="default">Left</Button>
                      <Button bsStyle="default">Middle</Button>
                      <Button bsStyle="default">Right</Button>
                    </ButtonGroup>
                  </CodeExample>

                  <h2>Split buttons</h2>
                  <CodeExample>
                    <SplitButton
                      bsStyle="default"
                      title="I'm an action"
                      id="bla"
                    >
                      <MenuItem eventKey="1">And another one</MenuItem>
                      <MenuItem eventKey="2">A different one</MenuItem>
                      <MenuItem eventKey="3">An action</MenuItem>
                    </SplitButton>
                  </CodeExample>
                </Panel.Body>
              </Panel>
            </section>

            <section id="forms">
              <h1>Forms</h1>
              <p>Inputs can be used in a form group or individually. It's
                mandatory that each input has a label. Inputs should have the
                appropriate width according to the content it's going to
                receive - to size the width of an input add the class
                <code>.col-*-*</code> to <code>.form-group</code>, and to size
                the height use <code>.input-*</code> or
                <code>.form-group-*</code> when using
                <code>.form-group</code>s.
              </p>

              <p>Optional fields should be indicated instead of required
                fields. Placeholders should always give some hint to the user
                on what is the expected input.<br />
                In case of <strong>inputs with feedback, the input should return to it's
                normal state when it becomes active.</strong>
              </p>

              <h2>Inputs</h2>

              <Panel>
                <Panel.Body>
                  <h3>Normal inputs</h3>

                  <CodeExample>
                    <FormGroup controlId="input-normal-email" bsClass="form-group col-xs-6">
                      <ControlLabel>Email address</ControlLabel>
                      <FormControl type="text" placeholder="youremail@email.com" name="email" />
                    </FormGroup>
                  </CodeExample>

                  <CodeExample>
                    <FormGroup controlId="input-card-number" bsClass="form-group has-card col-xs-6">
                      <ControlLabel>Card number</ControlLabel>
                      <FormControl type="text" placeholder="xxxx xxxx xxxx xxxx" name="card" />
                      <div className="card card-visa"></div>
                    </FormGroup>
                  </CodeExample>

                  <h3>Disabled input</h3>

                  <CodeExample>
                    <FormGroup controlId="input-disabled" bsClass="form-group col-xs-6">
                      <ControlLabel>Username</ControlLabel>
                      <FormControl type="text" placeholder="Name" name="card" disabled={true} />
                    </FormGroup>
                  </CodeExample>

                  <h3>With help</h3>

                  <CodeExample>
                    <FormGroup controlId="input-help" bsClass="form-group col-xs-6">
                      <ControlLabel>
                        Name
                        <OverlayTrigger overlay={<Tooltip id="change-name-tooltip">Changing the username will also change the URL of your projects.</Tooltip>}>
                          <i className="fa fa-question-circle-o" ></i>
                        </OverlayTrigger>
                      </ControlLabel>
                      <FormControl type="text" placeholder="your-name" name="name" />
                      <p>letters, digits, _ (underscores) and - (dashes) only. 3 chars min.</p>
                    </FormGroup>
                  </CodeExample>

                  <h3>Optional fields</h3>

                  <CodeExample>
                    <FormGroup controlId="input-optional" bsClass="form-group optional col-xs-6">
                      <ControlLabel>Name</ControlLabel>
                      <FormControl type="text" placeholder="Name" name="name" />
                    </FormGroup>
                  </CodeExample>

                  <h3>Feedback error</h3>

                  <CodeExample>
                    <FormGroup controlId="input-feedback-error" bsClass="form-group has-feedback has-error col-xs-6">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl type="email" placeholder="Name" name="Email" />
                      <div className="form-control-feedback fa fa-times"></div>
                      <p>This is not an email address</p>
                    </FormGroup>
                  </CodeExample>

                  <CodeExample>
                    <FormGroup bsClass="form-group has-feedback has-error col-xs-6">
                      <Checkbox id="input-feedback-error-checkbox" name="checkbox-error" label="Select me" />
                      <p>This field is required</p>
                    </FormGroup>
                  </CodeExample>

                  <form>
                    <div
                      className="form-group has-feedback has-error col-md-6 sg-code"
                    >
                      <select
                        id="developers"
                        className="selectpicker"
                        data-width="100%"
                        title="Select an option"
                        required
                      >
                        <option>1-4</option>
                        <option>4-20</option>
                        <option>21-100</option>
                        <option>101-500</option>
                        <option>501+</option>
                      </select>
                      <p>This field is required</p>
                    </div>
                  </form>

                  <h3>Input with an addon</h3>

                  <CodeExample>
                    <FormGroup controlId="input-addon" bsClass="form-group col-xs-6">
                      <ControlLabel>Email</ControlLabel>
                      <InputGroup>
                        <FormControl type="text" placeholder="Username" />
                        <InputGroup.Addon>@example.com</InputGroup.Addon>
                      </InputGroup>
                    </FormGroup>
                  </CodeExample>

                  <h3>Checkboxes addon</h3>

                  <CodeExample>
                    <InputWithCheckbox />
                  </CodeExample>
                  <Clearfix />
                  <h3>Inputs with tag boxes</h3>
                  <form>
                    <div className="form-group col-md-6 sg-code"><label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control form-md"
                        name="email"
                        placeholder="email@email.com, email@email.com"
                        data-role="tagsinput"
                      />
                    </div>
                  </form>
                </Panel.Body>
              </Panel>

              <h2>Selection with dropdowns</h2>

              <Panel>
                <Panel.Body>
                  <select className="selectpicker" multiple>
                    <option>All teams</option>
                    <option>Core</option>
                    <option data-divider="true"></option>
                    <option>Frontend</option>
                  </select>
                  <div className="dropdown sg-code">
                    <button
                      className="btn btn-dropdown dropdown-toggle"
                      type="button"
                      id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      <i className="fa fa-filter"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu1"
                    >
                      <li className="active"><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                    </ul>
                  </div>
                  <h3>Filter Component</h3>
                  <div className="filter-container sg-code">
                    <select className="selectpicker" data-width="fit">
                      <option>All teams</option>
                      <option>Core</option>
                      <option data-divider="true"></option>
                      <option>Frontend</option>
                    </select>
                    <select defaultValue="Core" className="selectpicker" data-width="fit">
                      <option>All teams</option>
                      <option>Core</option>
                      <option data-divider="true"></option>
                      <option>Frontend</option>
                    </select>
                  </div>
                  <div className="filter-container sg-code">
                    <div className="btn-group">
                      <button
                        className="btn btn-dropdown dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        All languages
                              </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li className="active"><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                      </ul>
                    </div>
                    <div className="btn-group">
                      <button
                        className="btn btn-dropdown dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        All patterns
                              </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li className="dropdown-header">Pattern</li>
                        <li><a href="#">Action</a></li>
                        <li className="active">
                          <a href="#">Another action</a>
                        </li>
                        <li><a href="#">Something else here</a></li>
                      </ul>
                    </div>
                    <div className="btn-group">
                      <button
                        className="btn btn-dropdown dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        All levels
                              </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li><a href="#">Action</a></li>
                        <li className="active">
                          <a href="#">Another action</a>
                        </li>
                        <li><a href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                  <h3>Dropdown with search</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <select
                        className="selectpicker"
                        data-live-search="true"
                        title="Search users"
                      >
                        <option data-tokens="ketchup mustard"
                        >João Machado</option
                        >
                        <option data-tokens="mustard"
                        >Rodrigo Fernandes</option
                        >
                        <option data-tokens="frosting">Rafael Cortes</option>
                        <option data-tokens="frosting"
                        >johannegger/dependenciesscala-edited-online-with-bit-1502274565854</option
                        >
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select className="selectpicker" multiple>
                        <option>Mustard</option>
                        <option>Ketchup</option>
                        <option>Relish</option>
                      </select>
                    </div>
                  </div>
                  <h3>with avatar</h3>
                  <select className="selectpicker" title="Search users">
                    <option
                      data-content="<img alt='Joao Machado' className='avatar avatar-xxs' src='https://lorempixel.com/50/50/people/'><p>Joao Machado</p>"
                      data-tokens="Joao Machado"
                    ></option>
                    <option
                      data-content="<img alt='Rafael Cortez' className='avatar avatar-xxs' src='https://lorempixel.com/50/50/people/'><p>Rafael Cortes</p>"
                      data-tokens="Rafael Cortez"
                    ></option>
                    <option
                      data-content="<img alt='Rodrigo Fernandes' className='avatar avatar-xxs' src='https://lorempixel.com/50/50/people/'><p>Rodrigo Fernandes</p>"
                      data-tokens="Rodrigo Fernandes"
                    ></option>
                  </select>
                  <div className="row">
                    <div className="col-md-6">
                      <h3>With multiple levels</h3>
                      <div className="dropdown sg-code">
                        <button
                          className="btn btn-default dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                        >
                          Tutorials <i className="fa fa-angle-down"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li><a tabIndex={-1} href="#">HTML</a></li>
                          <li><a tabIndex={-1} href="#">CSS</a></li>
                          <li className="dropdown-submenu"><a className="test" tabIndex={-1} href="#"
                          >New dropdown</a
                          >
                            <ul className="dropdown-menu">
                              <li><a tabIndex={-1} href="#"
                              >2nd level dropdown</a>
                              </li>
                              <li><a tabIndex={-1} href="#">2nd level dropdown</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3>Opening aligned to the right</h3>
                      <div className="dropdown pull-left">
                        <button
                          className="btn btn-default dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                        >
                          Tutorials <i className="fa fa-angle-down"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li><a tabIndex={-1} href="#">HTML</a></li>
                          <li><a tabIndex={-1} href="#">CSS</a></li>
                          <li className="dropdown-submenu"><a className="test" tabIndex={-1} href="#"
                          >New dropdown</a
                          >
                            <ul className="dropdown-menu">
                              <li><a tabIndex={-1} href="#"
                              >2nd level dropdown</a
                              >
                              </li>
                              <li><a tabIndex={-1} href="#"
                              >2nd level dropdown</a
                              >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3>Submenu to the left</h3>
                    <div className="dropdown pull-left">
                      <button
                        className="btn btn-default dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                      >
                        Tutorials <i className="fa fa-angle-down"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li><a tabIndex={-1} href="#">HTML</a></li>
                        <li><a tabIndex={-1} href="#">CSS</a></li>
                        <li className="dropdown-submenu pull-left"><a className="test" tabIndex={-1} href="#">New dropdown</a>
                          <ul className="dropdown-menu">
                            <li><a tabIndex={-1} href="#">2nd level dropdown</a>
                            </li>
                            <li><a tabIndex={-1} href="#">2nd level dropdown second</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>

              <h2>Checkbox</h2>
              <p>Checkboxes should be used when yada yada</p>

              <Panel>
                <Panel.Body>
                  <Checkbox id="checkbox-big-example" name="checkbox-big-example" defaultChecked={true} label="Big" size="md" />

                  <CodeExample>
                    <Checkbox id="checkbox-default-example" name="checkbox-default-example" label="Default" />
                  </CodeExample>

                  <h4>Checkboxes without label text</h4>
                  <p>Usually only used when yada yada</p>

                  <CodeExample>
                    <Checkbox id="checkbox-without-label" name="checkbox-without-label" value="option1" defaultChecked={true} />
                  </CodeExample>

                  <h4>Inline checkboxes</h4>
                  <p>Used when yada yada. Simply add <code>.checkbox-inline</code> to the parent. <br />
                    Check the following code and repeat for all checkboxes.
                  </p>

                  <CodeExample>
                    <Checkbox id="checkbox-inline-1" name="checkbox-inline" value="option1" inline={true} label="Inline one" />
                    <Checkbox id="checkbox-inline-2" name="checkbox-inline" value="option2" inline={true} label="Inline Two" />
                  </CodeExample>

                  <h4>Disabled state also supported</h4>
                  <p>Use when yada yada</p>

                  <CodeExample>
                    <Checkbox id="checkbox-disabled-1" name="checkbox-disabled" value="option1" disabled={true} inline={true} label="Can't check this" />
                    <Checkbox id="checkbox-disabled-2" name="checkbox-disabled" value="option2" disabled={true} inline={true} defaultChecked={true} label="This too" />
                  </CodeExample>

                  <h4>Switch</h4>

                  <CodeExample>
                    <Switch id="checkbox-switch-1" name="checkbox-switch" defaultChecked={true} big={true} />
                    <Switch id="checkbox-switch-2" name="checkbox-switch" defaultChecked={true} />
                  </CodeExample>
                </Panel.Body>
              </Panel>

              <h2>Radio buttons</h2>
              <p>Add a usage description here</p>

              <Panel>
                <Panel.Body>
                  <div className="radio">
                    <input
                      type="radio"
                      name="radio1"
                      id="radio1"
                      value="option1"
                      defaultChecked
                    /><label htmlFor="radio1">Small</label>
                  </div>
                  <div className="radio radio-md sg-code">
                    <input
                      type="radio"
                      name="radio1"
                      id="radio2"
                      value="option2"
                    /><label htmlFor="radio2">Big</label>
                  </div>
                  <h4>Radios without label text</h4>
                  <p>Lala lala</p>
                  <div className="sg-code">
                    <div className="radio">
                      <input
                        type="radio"
                        id="singleRadio1"
                        value="option1"
                        name="radio2"
                        aria-label="Single radio One"
                      />
                      <label></label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        id="singleRadio2"
                        value="option2"
                        name="radio2"
                        aria-label="Single radio Two"
                        defaultChecked
                      />
                      <label></label>
                    </div>
                  </div>
                  <h4>Inline radios</h4>
                  <p>Used when yada yada</p>
                  <div className="sg-code">
                    <div className="radio radio-inline">
                      <input
                        type="radio"
                        id="inlineRadio1"
                        value="option1"
                        name="radioInline"
                        defaultChecked
                      /><label htmlFor="inlineRadio1"> Inline One </label>
                    </div>
                    <div className="radio radio-inline">
                      <input
                        type="radio"
                        id="inlineRadio2"
                        value="option2"
                        name="radioInline"
                      /><label htmlFor="inlineRadio2"> Inline Two </label>
                    </div>
                  </div>
                  <h4>Disabled</h4>
                  <p>Disabled state also supported.</p>
                  <div className="radio radio-primary">
                    <input
                      type="radio"
                      name="radio3"
                      id="radio5"
                      value="option1"
                      disabled
                    /><label htmlFor="radio5"> Next </label>
                  </div>
                  <div className="radio sg-code">
                    <input
                      type="radio"
                      name="radio3"
                      id="radio6"
                      value="option2"
                      defaultChecked
                      disabled
                    /><label htmlFor="radio6"> One </label>
                  </div>
                  <h4>Buttons with radio behaviour</h4>
                  <div className="btn-toggle sg-code" data-toggle="buttons">
                    <label className="btn btn-link">
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        autoComplete="off"
                      />
                      Last 7 days
                                              </label>
                    <label className="btn btn-link active">
                      <input
                        type="radio"
                        name="options"
                        id="option2"
                        autoComplete="off"
                        defaultChecked
                      />
                      Last 31 days
                          </label>
                  </div>
                </Panel.Body>
              </Panel>
            </section>

            <section id="alerts">
              <div className="row">
                <div className="col-md-12">
                  <h1>Alerts</h1>
                  <p>Very nice description on alerts</p>
                  <div className="panel">
                    <div className="panel-body">
                      <div className="alert alert-success sg-code" role="alert">
                        <p>Congrats! You are now logged in.</p>
                      </div>
                      <a className="alert-clickable sg-code" href="#">
                        <div className="alert alert-info" role="alert">
                          <p>
                            Hey! Just letting you know that everything's gonna be
                            alright. I got this.
                                  </p>
                        </div>
                      </a>
                      <div className="alert alert-warning" role="alert">
                        <p>Be careful! I'm not sure if I got this...</p>
                      </div>
                      <div className="alert alert-danger" role="alert">
                        <p>Oops! Shit, son.</p>
                      </div>
                      <h4>Dismissable alerts</h4>
                      <p>Lalala</p>
                      <div
                        className="alert alert-warning alert-dismissible fade in sg-code"
                        role="alert"
                      >
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <p>
                          <strong>Warning!</strong> Better check yourself, you're
                          not looking too good.
                              </p>
                      </div>
                      <h4>Example of an alert with link</h4>
                      <p>Lalalala</p>
                      <div className="alert alert-info sg-code" role="alert">
                        <p>Hey! Yada yada <a href="#">click here woo</a></p>
                      </div>
                      <h4>Example of a larger alerts</h4>
                      <p>Lalalala</p>

                      <div className="alert alert-danger sg-code" role="alert">
                        <h4>Oops! What is going on?</h4>
                        <p>
                          Well, we don't know either. Why don't you contact
                          support?
                              </p>
                      </div>

                      <div
                        className="alert-hotspot alert-dismissible  sg-code"
                        role="alert"
                      >
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        ></button>
                        <div className="clearfix">
                          <div className="pull-left">
                            <figure className="avatar avatar-xs">
                              <div style={{ backgroundColor: '#000', width: '500px', height: '500px' }}
                              ></div>
                            </figure>
                          </div>
                          <p>
                            <a href="#">Portal</a> has
                                  <strong>broken the build 7 times</strong> in the last
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              2 days.
                                  </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h2>Labels</h2>
                  <span className="label label-default">Default</span>
                  <span className="label label-success">Success</span>
                  <span className="label label-warning">Warning</span>
                  <span className="label label-danger sg-code">Danger</span>
                  <span className="label label-danger label-status sg-code"
                  >Not up to standards</span
                  >
                  <span className="label label-success label-status sg-code"
                  >Up to standards</span
                  >
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h2>Badges</h2>
                  <a href="#"
                  >Messages <span className="badge sg-code">42</span></a
                  >
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h2>Popover</h2><span
                    className="fa-stack fa-lg sg-code"
                    data-html="true"
                    data-type="popover-primary"
                    data-toggle="popover"
                    data-content="Fix 7 issues and improve coverage to be up to standards.  <a href='#'>Fix now</a>"
                    data-placement="top"
                    title="Tip"
                    data-trigger="focus"
                    tabIndex={0}
                  >
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-lightbulb-o fa-stack-1x"></i>
                  </span><span
                    className="fa-stack fa-lg sg-code"
                    data-html="true"
                    data-toggle="popover"
                    data-content="Fix 7 issues and improve coverage to be up to standards.  <a href='#'>Fix now</a>"
                    data-placement="top"
                    title="Tip"
                    data-trigger="focus"
                    tabIndex={0}
                  >
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-lightbulb-o fa-stack-1x"></i>
                  </span>
                </div>
              </div>
            </section>
            <section id="panels">
              <div className="row">
                <hr />
                <div className="col-md-12">
                  <h1>Panels</h1>
                  <p>Lalala</p>
                  <div className="panel panel-default sg-code">
                    <div className="panel-body">
                      <p>Basic panel example</p>
                    </div>
                  </div>
                  <h2>Clickable container</h2>
                  <a className="panel-clickable sg-code" href="#test">
                    <div className="panel panel-default">
                      <div className="panel-body">
                        <p>Clickable panel</p>
                      </div>
                    </div>
                  </a>

                  <a className="panel-clickable sg-code" href="#test">
                    <div className="panel panel-empty">
                      <div className="panel-body">
                        <div className="empty-project">
                          <div className="pull-left">
                            <span
                              style={{ height: '28px', width: '28px', borderRadius: '50%' }}
                            ></span>
                          </div>
                          <div className="pull-left">
                            <span style={{ height: '10px', width: '50px' }}></span>
                            <span style={{ height: '10px', width: '70px' }}></span>
                            <br />
                            <ul className="list-inline">
                              <li>
                                <span style={{ height: '10px', width: '30px' }}></span>
                                <span style={{ height: '10px', width: '15px' }}></span>
                              </li>
                              <li>
                                <span style={{ height: '10px', width: '45px' }}></span>
                                <span style={{ height: '10px', width: '15px' }}></span>
                              </li>
                              <li>
                                <span style={{ height: '10px', width: '35px' }}></span>
                                <span style={{ height: '10px', width: '15px' }}></span>
                              </li>
                              <li>
                                <span style={{ height: '10px', width: '30px' }}></span>
                                <span style={{ height: '10px', width: '15px' }}></span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="cta-add-project hidden">
                          Add project
                              </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-12">
                  <h3>Examples</h3>
                  <p>Lalala</p>
                  <div className="col-md-6">
                    <a href="#test" className="panel-clickable">
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <figure className="avatar avatar-md">
                            <div style={{ backgroundColor: '#000', width: '500px', height: '500px' }}></div>
                          </figure>
                          <h5>João Machado</h5>
                          <p>princesa(at)codacy.com</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#test" className="panel-clickable">
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <figure className="avatar avatar-md">
                            <div style={{ backgroundColor: '#000', width: '500px', height: '500px' }}></div>
                          </figure>
                          <h5>Rodrigo Fernandes</h5>
                          <p>rodrigo(at)codacy.com</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-md-4">
                    <a href="#test" className="panel-clickable">
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <figure className="avatar">
                            <div style={{ backgroundColor: '#000', width: '500px', height: '500px' }}></div>
                          </figure>
                          <h5>Rodrigo Fernandes</h5>
                          <p>rodrigo(at)codacy.com</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="#test" className="panel-clickable">
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <figure className="avatar">
                            <div style={{ backgroundColor: '#000', width: '500px', height: '500px' }}></div>
                          </figure>
                          <h5>Rodrigo Fernandes</h5>
                          <p>rodrigo(at)codacy.com</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="#test" className="panel-clickable">
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <figure className="avatar">
                            <div style={{ backgroundColor: '#000', width: '500px', height: '500px' }}></div>
                          </figure>
                          <h5>Rodrigo Fernandes</h5>
                          <p>rodrigo(at)codacy.com</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-12">
                  <h3>Panel for issues</h3>
                  <div
                    className="panel panel-warning panel-issue margin-top-sm margin-bottom-sm margin-left-sm"
                  >
                    <div className="panel-heading">
                      <h5 className="no-margin">
                        Don't use a predictable random number generator
                              </h5>
                    </div>
                    <div
                      className="panel-body no-padding border-secondary-top FileSource"
                    >
                      <div className="flex border-secondary-top">
                        <a className="line-number small" href="#">
                          <span>105</span>
                        </a>
                        <pre className="source-code no-margin no-padding-top no-padding-bottom">
                          private def rand = Random.nextString(6)
                              </pre>
                      </div>
                    </div>
                    <div
                      className="panel-body border-secondary-top IssueDetailContainer"
                      style={{ display: 'none' }}
                    >
                      <div className="IssueDetail">
                        <div className="row">
                          <div className="col-xs-12">
                            <div className="clearfix">
                              <div className="pull-left">
                                <img
                                  src="http://bla"
                                  width="26"
                                  height="26"
                                  className="avatar avatar-xs"
                                // onError={(e) => {
                                //     e.currentTarget.onerror = null;
                                //     e.currentTarget.src = '/legacy/versioned/images/account/default-user-4.png';
                                //     // this.onError = null;
                                //     // this.src = '/legacy/versioned/images/account/default-user-4.png';
                                // }}
                                />
                              </div>
                              <h6 className="pull-left">
                                pedrorijo91
                                      <span className="text-normal text-secondary"
                                >2 years ago</span
                                >
                              </h6>

                              <div className="pull-right">
                                <div className="dropdown">
                                  <button
                                    id="qa-dropdown-file-options"
                                    className="btn btn-default btn-sm btn-icon dropdown-toggle"
                                    data-toggle="dropdown"
                                    type="button"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                  >
                                    <i
                                      className="fa fa-gear"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-angle-down"
                                      aria-hidden="true"
                                    ></i>
                                  </button>
                                  <ul
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="qa-dropdown-file-options"
                                  >
                                    <li><a href="#">Ignore issue</a></li>
                                    <li className="divider"></li>
                                    <li className="dropdown-submenu pull-left"><a tabIndex={-1}
                                    ><i className="fa fa-bitbucket"></i>
                                      Bitbucket</a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="#"
                                          ><i className="fa fa-comment-o"></i>
                                            Create Comment</a>
                                        </li>
                                        <li>
                                          <a href="#"
                                          ><i className="fa fa-bug"></i> Create
                                                  Issue</a
                                          >
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="pull-right margin-right-xxs">
                                <a
                                  href="#"
                                  className="btn btn-default btn-sm "
                                  role="button"
                                >View File</a
                                >
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12">
                            <p className="small">
                              Time to fix: 5 minutes
                                      <i
                                className="fa fa-link js-copy"
                                data-original-title="Copy issue link"
                              ></i>
                            </p>
                          </div>
                        </div>
                        <div className="DetailLines">
                          <div className="flex">
                            <a className="line-number small" href="#"
                            ><span>103</span></a
                            >
                            <pre className="source-code no-margin no-padding-top no-padding-bottom scala hljs">
                              {`}`}
                            </pre>
                          </div>
                          <div className="flex">
                            <a className="line-number small" href="#"
                            ><span>104</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            ></pre>
                          </div>
                          <div className="flex has-issue">
                            <a className="line-number small" href="#"
                            ><span>105</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            >
                              {`<span className="hljs-keyword">private</span> <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">rand</span> </span>= <span className="hljs-type">Random</span>.nextString(<span className="hljs-number">6</span>)`}
                            </pre>
                          </div>
                          <div className="flex">
                            <a className="line-number small" href="#"
                            ><span>106</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            ></pre>
                          </div>
                          <div className="flex">
                            <a className="line-number small" href="#"
                            ><span>107</span></a
                            >
                            <pre className="source-code no-margin no-padding-top no-padding-bottom scala hljs">
                              {`<span className="hljs-keyword">private</span> <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">createCategory</span></span>(patternCategoryType: <span className="hljs-type">PatternCategoryType</span>.<span className="hljs-type">Value</span>) = {`}
                            </pre>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <h6 className="margin-top">Why is this an issue?</h6>
                            <div className="PatternExplanation">
                              <p>
                                The use of a predictable random value can lead to
                                vulnerabilities when used in certain security
                                critical contexts. For example, when the value is
                                used as:
                                      </p>
                              <ul>
                                <li>a CSRF token</li>
                                <li>a password reset token (sent by email)</li>
                                <li>any other secret value</li>
                                <li>
                                  A quick fix could be to replace the use of
                                  java.util.Random with something stronger, such
                                  as java.security.SecureRandom.
                                      </li>
                              </ul>
                              <p>Vulnerable Code:</p>
                              <pre><code>{`String generateSecretToken() {`}</code></pre>
                              <p>Solution:</p>
                              <pre><code>{`
                                                                                                                                                                                                                                                          import org.apache.commons.codec.binary.Hex;
String generateSecretToken() {
                                                                                                                                                                                                                                                              SecureRandom secRandom = new SecureRandom();
                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                          byte[] result = new byte[32];
                                                                                                                                                                                                                                                          secRandom.nextBytes(result);
                                                                                                                                                                                                                                                          return Hex.encodeHexString(result);
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                  `}</code></pre>
                              <p><a href="#">More Information</a></p>
                            </div>

                            <h6 className="margin-top">Related code pattern</h6>
                            <a href="#" className="h5">Prohibit weak Random</a>
                            <p>
                              Do not use java.util.Random, its pseudo random
                              generator can be predictable
                                  </p>
                            <span className="label label-default label-sm"
                            >Scala</span
                            >
                            <span className="label label-default label-sm"
                            >Security</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="panel panel-info panel-issue margin-top-sm margin-bottom-sm margin-left-sm"
                  >
                    <div className="panel-heading">
                      <h5 className="no-margin">
                        Don't use a predictable random number generator
                              </h5>
                    </div>
                    <div
                      className="panel-body no-padding border-secondary-top FileSource"
                    >
                      <div className="flex border-secondary-top">
                        <a className="line-number small" href="#">
                          <span>105</span>
                        </a>
                        <pre
                          className="source-code no-margin no-padding-top no-padding-bottom"
                        >
                          private def rand = Random.nextString(6)</pre
                        >
                      </div>
                    </div>
                    <div
                      className="panel-body border-secondary-top IssueDetailContainer"
                      style={{ display: 'none' }}
                    >
                      <div className="IssueDetail">
                        <div className="row">
                          <div className="col-xs-12">
                            <div className="clearfix">
                              <div className="pull-left">
                                <img
                                  src="https://secure.gravatar.com/avatar/a2640a0b7fe187c9b9c36af6bf1fe985?s=256&amp;d=https://s3-eu-west-1.amazonaws.com/codacy-public-assets/default-user-4.png"
                                  width="26"
                                  height="26"
                                  className="avatar avatar-xs"
                                // onerror="this.onError = null; this.src = '/legacy/versioned/images/account/default-user-4.png';"
                                />
                              </div>
                              <h6 className="pull-left">
                                pedrorijo91
                                      <span className="text-normal text-secondary"
                                >2 years ago</span
                                >
                              </h6>

                              <div className="pull-right">
                                <div className="dropdown">
                                  <button
                                    id="qa-dropdown-file-options"
                                    className="btn btn-default btn-sm btn-icon dropdown-toggle"
                                    data-toggle="dropdown"
                                    type="button"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                  >
                                    <i
                                      className="fa fa-gear"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-angle-down"
                                      aria-hidden="true"
                                    ></i>
                                  </button>
                                  <ul
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="qa-dropdown-file-options"
                                  >
                                    <li><a href="#">Ignore issue</a></li>
                                    <li className="divider"></li>
                                    <li className="dropdown-submenu pull-left"><a tabIndex={-1}
                                    ><i className="fa fa-bitbucket"></i>
                                      Bitbucket</a
                                    >
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="#"
                                          ><i className="fa fa-comment-o"></i>
                                            Create Comment</a
                                          >
                                        </li>
                                        <li>
                                          <a href="#"
                                          ><i className="fa fa-bug"></i> Create
                                                  Issue</a
                                          >
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="pull-right margin-right-xxs">
                                <a
                                  href="#"
                                  className="btn btn-default btn-sm "
                                  role="button"
                                >View File</a
                                >
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12">
                            <p className="small">
                              Time to fix: 5 minutes
                                      <i
                                className="fa fa-link js-copy"
                                data-original-title="Copy issue link"
                              ></i>
                            </p>
                          </div>
                        </div>
                        <div className="DetailLines">
                          <div className="flex">
                            <a className="line-number small" href="#"
                            ><span>103</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            >
                              }</pre
                            >
                          </div>
                          <div className="flex">
                            <a className="line-number small" href="#"
                            ><span>104</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            ></pre>
                          </div>
                          <div className="flex has-issue">
                            <a className="line-number small" href="#"
                            ><span>105</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            >  <span className="hljs-keyword">private</span> <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">rand</span> </span>= <span className="hljs-type">Random</span>.nextString(<span className="hljs-number">6</span>)</pre>
                          </div>
                          <div className="flex">
                            <a className="line-number small" href="#"
                            ><span>106</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            ></pre>
                          </div>
                          <div className="flex">
                            <a className="line-number small" href="#"
                            ><span>107</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            >{`<span className="hljs-keyword">private</span> <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">createCategory</span></span>(patternCategoryType: <span className="hljs-type">PatternCategoryType</span>.<span className="hljs-type">Value</span>) = {`}
                            </pre>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <h6 className="margin-top">Why is this an issue?</h6>
                            <div className="PatternExplanation">
                              <p>
                                The use of a predictable random value can lead to
                                vulnerabilities when used in certain security
                                critical contexts. For example, when the value is
                                used as:
                                      </p>
                              <ul>
                                <li>a CSRF token</li>
                                <li>a password reset token (sent by email)</li>
                                <li>any other secret value</li>
                                <li>
                                  A quick fix could be to replace the use of
                                  java.util.Random with something stronger, such
                                  as java.security.SecureRandom.
                                      </li>
                              </ul>
                              <p>Vulnerable Code:</p>
                              <pre><code>{`String generateSecretToken() {
                                                                                                                                                                                                                                                                  Random r = new Random();
                                                                                                                                                                                                                                                                  return Long.toHexString(r.nextLong());
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                              
          `}</code></pre>
                              <p>Solution:</p>
                              <pre><code>{`
                                                                                                                                                                                                                                                                  import org.apache.commons.codec.binary.Hex;
                                                                                                                                                                                                                                                                  
          String generateSecretToken() {
                                                                                                                                                                                                                                                                      SecureRandom secRandom = new SecureRandom();
                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                  byte[] result = new byte[32];
                                                                                                                                                                                                                                                                  secRandom.nextBytes(result);
                                                                                                                                                                                                                                                                  return Hex.encodeHexString(result);
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                              `}</code></pre>
                              <p><a href="#">More Information</a></p>
                            </div>

                            <h6 className="margin-top">Related code pattern</h6>
                            <a href="#" className="h5">Prohibit weak Random</a>
                            <p>
                              Do not use java.util.Random, its pseudo random
                              generator can be predictable
                                  </p>
                            <span className="label label-default label-sm"
                            >Scala</span
                            >
                            <span className="label label-default label-sm"
                            >Security</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="panel panel-error panel-issue margin-top-sm margin-bottom-sm margin-left-sm"
                  >
                    <div className="panel-heading">
                      <h5 className="no-margin">
                        Don't use a predictable random number generator
                              </h5>
                    </div>
                    <div
                      className="panel-body no-padding border-secondary-top FileSource"
                    >
                      <div className="flex border-secondary-top">
                        <a className="line-number small" href="#">
                          <span>105</span>
                        </a>
                        <pre
                          className="source-code no-margin no-padding-top no-padding-bottom"
                        >
                          private def rand = Random.nextString(6)</pre
                        >
                      </div>
                    </div>
                    <div
                      className="panel-body border-secondary-top IssueDetailContainer"
                      style={{ display: 'none' }}
                    >
                      <div className="IssueDetail">
                        <div className="row">
                          <div className="col-xs-12">
                            <div className="clearfix">
                              <div className="pull-left">
                                <img
                                  src="https://secure.gravatar.com/avatar/a2640a0b7fe187c9b9c36af6bf1fe985?s=256&amp;d=https://s3-eu-west-1.amazonaws.com/codacy-public-assets/default-user-4.png"
                                  width="26"
                                  height="26"
                                  className="avatar avatar-xs"
                                // onerror="this.onError = null; this.src = '/legacy/versioned/images/account/default-user-4.png';"
                                />
                              </div>
                              <h6 className="pull-left">
                                pedrorijo91
                                      <span className="text-normal text-secondary"
                                >2 years ago</span
                                >
                              </h6>

                              <div className="pull-right">
                                <div className="dropdown">
                                  <button
                                    id="qa-dropdown-file-options"
                                    className="btn btn-default btn-sm btn-icon dropdown-toggle"
                                    data-toggle="dropdown"
                                    type="button"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                  >
                                    <i
                                      className="fa fa-gear"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-angle-down"
                                      aria-hidden="true"
                                    ></i>
                                  </button>
                                  <ul
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="qa-dropdown-file-options"
                                  >
                                    <li><a href="#">Ignore issue</a></li>
                                    <li className="divider"></li>
                                    <li className="dropdown-submenu pull-left"><a tabIndex={-1}
                                    ><i className="fa fa-bitbucket"></i>
                                      Bitbucket</a
                                    >
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="#"
                                          ><i className="fa fa-comment-o"></i>
                                            Create Comment</a
                                          >
                                        </li>
                                        <li>
                                          <a href="#"
                                          ><i className="fa fa-bug"></i> Create
                                                  Issue</a
                                          >
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="pull-right margin-right-xxs">
                                <a
                                  href="#"
                                  className="btn btn-default btn-sm "
                                  role="button"
                                >View File</a
                                >
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12">
                            <p className="small">
                              Time to fix: 5 minutes
                                      <i
                                className="fa fa-link js-copy"
                                data-original-title="Copy issue link"
                              ></i>
                            </p>
                          </div>
                        </div>
                        <div className="DetailLines">
                          <div className="flex">
                            <a className="line-number small" href="#"
                            ><span>103</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            >
                              }</pre
                            >
                          </div>
                          <div className="flex">
                            <a className="line-number small" href="#"
                            ><span>104</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            ></pre>
                          </div>
                          <div className="flex has-issue">
                            <a className="line-number small" href="#"
                            ><span>105</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            >{`<span className="hljs-keyword">private</span> <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">rand</span> </span>= <span className="hljs-type">Random</span>.nextString(<span className="hljs-number">6</span>)`}</pre>
                          </div>
                          <div className="flex">
                            <a className="line-number small" href="#"
                            ><span>106</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            ></pre>
                          </div>
                          <div className="flex">
                            <a className="line-number small" href="#"
                            ><span>107</span></a
                            >
                            <pre
                              className="source-code no-margin no-padding-top no-padding-bottom scala hljs"
                            >{`<span className="hljs-keyword">private</span> <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">createCategory</span></span>(patternCategoryType: <span className="hljs-type">PatternCategoryType</span>.<span className="hljs-type">Value</span>) = {`}</pre>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <h6 className="margin-top">Why is this an issue?</h6>
                            <div className="PatternExplanation">
                              <p>
                                The use of a predictable random value can lead to
                                vulnerabilities when used in certain security
                                critical contexts. For example, when the value is
                                used as:
                                      </p>
                              <ul>
                                <li>a CSRF token</li>
                                <li>a password reset token (sent by email)</li>
                                <li>any other secret value</li>
                                <li>
                                  A quick fix could be to replace the use of
                                  java.util.Random with something stronger, such
                                  as java.security.SecureRandom.
                                      </li>
                              </ul>
                              <p>Vulnerable Code:</p>
                              <pre><code>{`String generateSecretToken() {
                                                                                                                                                                                                                                                                          Random r = new Random();
                                                                                                                                                                                                                                                                          return Long.toHexString(r.nextLong());
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                      
          `}</code></pre>
                              <p>Solution:</p>
                              <pre><code>{`
                                                                                                                                                                                                                                                                          import org.apache.commons.codec.binary.Hex;
                                                                                                                                                                                                                                                                          
          String generateSecretToken() {
                                                                                                                                                                                                                                                                              SecureRandom secRandom = new SecureRandom();
                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                          byte[] result = new byte[32];
                                                                                                                                                                                                                                                                          secRandom.nextBytes(result);
                                                                                                                                                                                                                                                                          return Hex.encodeHexString(result);
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                      `}</code></pre>
                              <p><a href="#">More Information</a></p>
                            </div>

                            <h6 className="margin-top">Related code pattern</h6>
                            <a href="#" className="h5">Prohibit weak Random</a>
                            <p>
                              Do not use java.util.Random, its pseudo random
                              generator can be predictable
                                  </p>
                            <span className="label label-default label-sm"
                            >Scala</span
                            >
                            <span className="label label-default label-sm"
                            >Security</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <h3>Checklist</h3>
                  <ul className="checklist sg-code">
                    <li>Item available</li>
                    <li className="item-not-available">Item not available</li>
                    <li>Item available</li>
                  </ul>
                  <h3>Group panels as an ordered list</h3>
                  <ol className="panel-ordered-group sg-code">
                    <li className="panel panel-default">
                      <div className="panel-body">
                        <p>
                          For the next steps, we assume that you already have
                          tests and coverage for your project.
                              </p>
                      </div>
                    </li>
                    <li className="panel panel-default">
                      <div className="panel-body">
                        <p>
                          Select the language you are using and follow the
                          instructions presented on the GitHub repository.
                              </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </section>
            <section id="progress-bar">
              <div className="row">
                <hr />
                <div className="col-md-12">
                  <h1>Progress bars</h1>
                  <p>Very nice</p>
                  <div
                    className="progress sg-code"
                    data-toggle="tooltip"
                    title="60%"
                  ><div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '60%' }}
                  >
                      <span className="sr-only">60% Complete</span>
                    </div>
                  </div>
                  <h2>Smaller bars</h2>
                  <p>Primary progress bar</p>
                  <div
                    className="progress progress-sm sg-code"
                    data-toggle="tooltip"
                    title="60%"
                  ><div
                    className="progress-bar progress-bar-info"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '60%' }}
                  >
                      .progress-bar-info
                          </div>
                  </div>
                  <h3>Examples of colors</h3>
                  <div
                    className="progress progress-sm"
                    data-toggle="tooltip"
                    title="60%"
                  ><div
                    className="progress-bar progress-bar-danger"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '60%' }}
                  >
                      .progress-bar-danger
                          </div>
                  </div><div
                    className="progress progress-sm"
                    data-toggle="tooltip"
                    title="40%"
                  ><div
                    className="progress-bar progress-bar-success"
                    role="progressbar"
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '40%' }}
                  >
                      .progress-bar-success
                          </div>
                  </div><div
                    className="progress progress-sm"
                    data-toggle="tooltip"
                    title="80%"
                  ><div
                    className="progress-bar progress-bar-warning"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '80%' }}
                  >
                      .progress-bar-warning
                          </div>
                  </div>
                  <p>These don't indicate state</p>
                  <div className="progress progress-sm"><div
                    className="progress-bar progress-bar-purple"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}
                  >
                    .progress-bar-purple
                          </div>
                  </div>
                  <div className="progress progress-sm sg-code"><div
                    className="progress-bar progress-bar-orange"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '60%' }}
                  >
                    .progress-bar-orange
                          </div>
                  </div>
                  <h2>Breadcrumbs</h2>

                  <div className="row">
                    <div className="col-md-12">
                      <ol className="breadcrumb breadcrumb-checks sg-code">
                        <li><a href="">Choose a plan</a></li>
                        <li><a href="">Customize plan</a></li>
                        <li className="active">
                          <a href="">Add Invoice details</a>
                        </li>
                        <li><a href="">Confirmation</a></li>
                      </ol>
                      <h3>With progress path</h3>
                      <div className="row progress-wizard sg-code">
                        <div className="col-xs-3 progress-wizard-step complete">
                          <div className="text-center progress-wizard-stepnum">
                            Step 1
                                  </div>
                          <div className="progress">
                            <div className="progress-bar"></div>
                          </div>
                          <a href="#" className="progress-wizard-dot"></a>
                          <div className="bprogresss-wizard-info text-center">
                            Register
                                  </div>
                        </div>
                        <div className="col-xs-3 progress-wizard-step active">
                          <div className="text-center progress-wizard-stepnum">
                            Step 2
                                  </div>
                          <div className="progress">
                            <div className="progress-bar"></div>
                          </div>
                          <a href="#" className="progress-wizard-dot"></a>
                          <div className="progress-wizard-info text-center">
                            Select
                                  </div>
                        </div>
                        <div className="col-xs-3 progress-wizard-step disabled">
                          <div className="text-center progress-wizard-stepnum">
                            Step 3
                                  </div>
                          <div className="progress">
                            <div className="progress-bar"></div>
                          </div>
                          <a href="#" className="progress-wizard-dot"></a>
                          <div className="progress-wizard-info text-center">
                            Confirm
                                  </div>
                        </div>
                        <div className="col-xs-3 progress-wizard-step disabled">
                          <div className="text-center progress-wizard-stepnum">
                            Step 4
                                  </div>
                          <div className="progress">
                            <div className="progress-bar"></div>
                          </div>
                          <a href="#" className="progress-wizard-dot"></a>
                          <div className="progressbs-wizard-info text-center">
                            Payment
                                  </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="tables">
              <div className="row">
                <hr />
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12">
                      <h2>Tables</h2>
                      <table className="table table-responsive sg-code">
                        <thead>
                          <tr>
                            <th>One</th>
                            <th>Two</th>
                            <th>Three</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><a href="#test">Real link</a></td>
                            <td>Normal text</td>
                            <td>Normal text</td>
                          </tr>
                          <tr>
                            <td><a href="#test">Real link</a></td>
                            <td>Normal text</td>
                            <td>Normal text</td>
                          </tr>
                          <tr>
                            <td><a href="#test">Real link</a></td>
                            <td>Normal text</td>
                            <td>Normal text</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-12">
                      <h2>Table with collapse option</h2>
                      <table
                        className="table table-striped table-responsive table-condensed table-collapse sg-code"
                      >
                        <thead>
                          <tr>
                            <th className="col-md-3">Project Id</th>
                            <th className="col-md-3">name</th>
                            <th className="col-md-3">status</th>
                            <th className="col-md-3"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><a href="#">2036</a></td>
                            <td><a href="#">onnx</a></td>
                            <td>OwnerNotCommiter</td>
                            <td>
                              <a
                                data-id="1"
                                href="#1"
                                aria-expanded="false"
                                data-toggle="collapse"
                                className="collapse-link"
                              >More details
                                      </a>
                            </td>
                          </tr>
                          <tr className="row-extra">
                            <td colSpan={4}>
                              <div id="1" className="collapse collapse-fix">
                                <table
                                  className="table table-condensed table-extra col-md-12"
                                >
                                  <tbody>
                                    <tr>
                                      <td className="col-md-3">
                                        <p className="table-th">access</p>
                                        <p>Public</p>
                                      </td>
                                      <td className="col-md-3">
                                        <p className="table-th">next analysis</p>
                                        <p
                                          data-toggle="tooltip"
                                          title="2017-10-02T01:34:42.000Z"
                                        >
                                          2 days from now
                                              </p>
                                      </td>
                                      <td className="col-md-3">
                                        <p className="table-th">languages</p>
                                        <p>C-1</p>
                                      </td>
                                      <td className="col-md-3">
                                        <p className="table-th">git url</p>
                                        <p>
                                          <a
                                            href="#"
                                            target="_blank"
                                            className="external-link"
                                          >GitHub</a
                                          >
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="#">2035</a></td>
                            <td><a href="#">cpp</a></td>
                            <td>Cloned</td>
                            <td>
                              <a
                                data-id="2"
                                href="#2"
                                aria-expanded="false"
                                data-toggle="collapse"
                                data-parent="#table-collapse"
                                className="collapse-link"
                              >More details
                                      </a>
                            </td>
                          </tr>
                          <tr className="row-extra">
                            <td colSpan={4}>
                              <div id="2" className="collapse collapse-fix">
                                <table
                                  className="table table-condensed table-extra col-md-12"
                                >
                                  <tbody>
                                    <tr>
                                      <td className="col-md-3">
                                        <p className="table-th">access</p>
                                        <p>Public</p>
                                      </td>
                                      <td className="col-md-3">
                                        <p className="table-th">next analysis</p>
                                        <p
                                          data-toggle="tooltip"
                                          title="2017-10-02T01:34:42.000Z"
                                        >
                                          2 days from now
                                              </p>
                                      </td>
                                      <td className="col-md-3">
                                        <p className="table-th">languages</p>
                                        <p>C-1</p>
                                      </td>
                                      <td className="col-md-4">
                                        <p className="table-th">git url</p>
                                        <p>
                                          <a
                                            href="#"
                                            target="_blank"
                                            className="external-link"
                                          >GitHub</a
                                          >
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="deltas">
              <div className="row">
                <hr />
                <div className="col-md-12">
                  <h1>Deltas</h1>
                  <p className="delta up positive">1</p>
                  <p className="delta down negative sg-code">10</p>
                  <p className="delta neutral strong sg-code">+ 10</p>
                </div>
              </div>
            </section>
            <section id="navbar">
              <div className="row">
                <hr />
                <div className="col-md-12">
                  <h1>Navigation</h1>
                  <nav className="navbar navbar-inverse sg-code">
                    <ul className="nav navbar-nav">
                      <li role="presentation" className="active">
                        <a href="#">Home</a>
                      </li>
                      <li role="presentation"><a href="#">Profile</a></li>
                      <li role="presentation">
                        <a href="#">Plans and billing</a>
                      </li>
                      <li role="presentation" className="disabled">
                        <a href="#">Emails</a>
                      </li>
                    </ul>
                  </nav>
                  <h2>Navbar Collapse</h2>
                  <p>Try a smaller window</p>
                  <nav className="navbar navbar-inverse sg-code">
                    <div className="container-fluid">
                      <div className="navbar-header">
                        <a className="navbar-brand" href="#"></a>
                      </div>
                      <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                      >
                        <ul className="nav navbar-nav">
                          <li><a href="#">Link 1</a></li>
                          <li><a href="#">Link 2</a></li>
                          <li><a href="#">Link 3</a></li>
                          <li className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                              role="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown
                                      <i
                                className="fa fa-chevron-down caret"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="#">Action</a></li>
                              <li><a href="#">Another action</a></li>
                              <li><a href="#">Something else here</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <h2>Right Aligned Navbar</h2>
                  <p>
                    When pulling a navbar to the right it's needed a container so
                    that a margin is aplyed
                          </p>
                  <nav className="navbar navbar-inverse sg-code">
                    <div className="container-fluid">
                      <ul className="nav navbar-nav navbar-right">
                        <li role="presentation" className="active">
                          <a href="#">Home</a>
                        </li>
                        <li role="presentation"><a href="#">Profile</a></li>
                        <li role="presentation">
                          <a href="#">Plans and billing</a>
                        </li>
                        <li role="presentation" className="disabled">
                          <a href="#">Emails</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="row">
                    <div className="col-md-6">
                      <h2>Side menu</h2>
                      <ul className="nav nav-pills nav-stacked sg-code">
                        <li role="presentation" className="active">
                          <a href="#dashboard">Dashboard</a>
                        </li>
                        <li role="presentation">
                          <a href="#integrations">Integrations</a>
                        </li>
                        <li role="presentation">
                          <a href="#patterns">Patterns</a>
                        </li>
                        <li role="presentation">
                          <a href="#settings">Settings</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h2>Without arrows</h2>
                      <ul className="nav nav-pills nav-stacked nav-list sg-code">
                        <li role="presentation" className="active">
                          <a href="#dashboard">Dashboard</a>
                        </li>
                        <li role="presentation">
                          <a href="#integrations">Integrations</a>
                        </li>
                        <li role="presentation">
                          <a href="#patterns">Patterns</a>
                        </li>
                        <li role="presentation">
                          <a href="#settings">Settings</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h2>Linked list</h2>
                      <ul className="list-group linked-list sg-code">
                        <li className="list-group-item">
                          <a href="#">
                            <div className="row">
                              <p className="text-secondary">
                                <small>codacy-website</small>
                              </p>
                              <p>
                                <strong>pedrorijo91</strong> wants to merge
                                      <span
                                  className="label label-success text-uppercase"
                                ><span className="git-merge"></span> Good to
                                          merge</span
                                >
                              </p>
                            </div>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="#">
                            <div className="row">
                              <p className="text-secondary">
                                <small>codacy-website</small>
                              </p>
                              <p>
                                <strong>pedrorijo91</strong> wants to merge
                                      <span
                                  className="label label-success text-uppercase"
                                ><span className="git-merge"></span> Good to
                                          merge</span
                                >
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h2>List without links</h2>
                      <ul className="list-group sg-code">
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-md-2">
                              <figure className="avatar avatar-xs">
                                <img
                                  src="https://secure.gravatar.com/avatar/fa4dbf28653d739aae161f3532225878?s=256&d=https://s3-eu-west-1.amazonaws.com/codacy-public-assets/default-user-1.png"
                                />
                              </figure>
                            </div>
                            <div className="col-md-7">
                              <h5>Rafeal Cortes</h5>
                            </div>
                            <div className="col-md-3">
                              <button className="btn btn-default btn-sm">
                                Invite
                                      </button>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-md-2">
                              <figure className="avatar avatar-xs">
                                <img
                                  src="https://secure.gravatar.com/avatar/fa4dbf28653d739aae161f3532225878?s=256&d=https://s3-eu-west-1.amazonaws.com/codacy-public-assets/default-user-1.png"
                                />
                              </figure>
                            </div>
                            <div className="col-md-7">
                              <h5>Pedro Rijo</h5>
                            </div>
                            <div className="col-md-3">
                              <button className="btn btn-default btn-sm">
                                Invite
                                      </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h2>Tabs</h2>
                  <div className="row sg-code">
                    <div className="col-md-12">
                      <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active">
                          <a
                            href="#home"
                            aria-controls="home"
                            role="tab"
                            data-toggle="tab"
                          >Home</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#profile"
                            aria-controls="profile"
                            role="tab"
                            data-toggle="tab"
                          >Profile</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#messages"
                            aria-controls="messages"
                            role="tab"
                            data-toggle="tab"
                          >Messages</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-12">
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          className="tab-pane active"
                          id="home"
                        >
                          At Home
                              </div>
                        <div role="tabpanel" className="tab-pane" id="profile">
                          At Profile
                              </div>
                        <div role="tabpanel" className="tab-pane" id="messages">
                          At Messages
                              </div>
                      </div>
                    </div>
                  </div>
                  <h2>Sidebar</h2>
                  <div className="row">
                    <div className="col-md-1 aside-nav sg-code">
                      <ul className="nav">
                        <li role="presentation">
                          <a href="#" className="aside-item arrow selected">
                            <div className="selected">
                              <img
                                className="svg aside-icon"
                                src="images/icon-dashboard.svg"
                              />
                            </div>
                            Overview
                                  </a>
                        </li>
                        <li role="presentation">
                          <a href="#" className="aside-item arrow">
                            <div className="">
                              <img
                                className="svg aside-icon"
                                src="images/icon-dashboard.svg"
                              />
                            </div>
                            Overview
                                  </a>
                        </li>
                        <li role="presentation">
                          <a href="#" className="aside-item arrow">
                            <div className="">
                              <img
                                className="svg aside-icon"
                                src="images/icon-dashboard.svg"
                              />
                            </div>
                            Overview
                                  </a>
                        </li>
                        <li role="presentation">
                          <a href="#" className="aside-item arrow">
                            <div className="">
                              <img
                                className="svg aside-icon"
                                src="images/icon-dashboard.svg"
                              />
                            </div>
                            Overview
                                  </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="pagination">
              <div className="row">
                <hr />
                <div className="col-md-12">
                  <nav aria-label="Page navigation" className="sg-code">
                    <ul className="pagination">
                      <li className="disabled">
                        <a href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li>
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </section>
            <div className="side-toast toast-success">
              <p>This issue will be ignored in your next analysis.</p>
              <i className="fa fa-times"></i>
            </div>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root") as HTMLElement
);

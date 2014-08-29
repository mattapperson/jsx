/**
 * @jsx React.DOM
 */

var React = require('React');
var Site = require('Site');
var center = require('center');
var H2 = require('H2');

var support = React.createClass({
  render: function() {
    return (
      <Site section="support">

        <section className="content wrap documentationContent nosidebar">
          <div className="inner-content">
            <h1>Need help?</h1>
            <div className="subHeader"></div>
            <p>
              <strong>jsx</strong> is worked on full-time by Facebook&#39;s
              product infrastructure user interface
              engineering teams. They&#39;re often around and available for
              questions.
            </p>

            <H2>Stack Overflow</H2>
            <p>Many members of the community use Stack Overflow to ask questions. Read through the <a href="http://stackoverflow.com/questions/tagged/jsxjs">existing questions</a> tagged with <strong>jsxjs</strong> or <a href="http://stackoverflow.com/questions/ask">ask your own</a>!</p>
            <H2>Google Groups mailing list</H2>
            <p><a href="http://groups.google.com/group/jsxjs" target="_blank">The <strong>jsxjs</strong> Google Group</a> is also a good place to ask questions and find answers.</p>
            <H2>IRC</H2>
            <p>Many developers and users idle on Freenode.net&#39;s IRC network in <strong><a href="irc://chat.freenode.net/jsxjs">#jsxjs on freenode</a></strong>.</p>
            <H2>Twitter</H2>
            <p><a href="https://twitter.com/search?q=%23jsxjs"><strong>#jsxjs</strong> hash tag on Twitter</a> is used to keep up with the latest jsx news.</p>

            <p><center><a className="twitter-timeline" data-dnt="true" data-chrome="nofooter noheader transparent" href="https://twitter.com/search?q=%23jsxjs" data-widget-id="464145350849085440"></a></center></p>
          </div>
        </section>

      </Site>
    );
  }
});

module.exports = support;

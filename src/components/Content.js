import PropTypes from 'prop-types';

const Content = ({ heading, children }) => (
  <div className="flex items-center bg-secondary">
    <div className="p-12">
      <h1 className="text-4xl mb-6">{heading}</h1>
      {children}
    </div>
  </div>
);

Content.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Content;

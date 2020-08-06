import PropTypes from 'prop-types';

const Content = ({ heading, children }) => (
  <div className="flex justify-center items-center">
    <div className="p-12">
      <h1 className="text-4xl font-semibold mb-6">{heading}</h1>
      {children}
    </div>
  </div>
);

Content.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Content;

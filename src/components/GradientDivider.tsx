const GradientDivider = ({title, className}: {title?: string; className?: string}) => {
  return (
    <div className="flex items-center">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-500"></span>
      {title && <span className={`shrink-0 px-4 lg:px-10 text-gray-900 ${className}`}>{title}</span>}
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-500"></span>
    </div>
  );
};

export default GradientDivider;

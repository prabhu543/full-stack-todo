import React from 'react';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return <div className='mt-17'>{children}</div>;
};

export default layout;

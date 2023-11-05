// Page.js
import * as React from 'react';

const pageStyle = {
    margin: '285px', // Use camelCase for CSS properties
};

function Page() {
    return (
        <div style={pageStyle}>
            <h2>Shared Page Content</h2>
            <p>This content is the same for all menu items.</p>
        </div>
    );
}

export default Page;

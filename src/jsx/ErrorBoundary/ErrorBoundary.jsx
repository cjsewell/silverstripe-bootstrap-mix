import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: null, errorInfo: null};
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    const {error, errorInfo} = this.state;
    const {children} = this.props;
    if (errorInfo) {
      return <div>
        {error?.message && error.message}
        {errorInfo?.componentStack && (
          <details className="smaller">
            <summary>Component stack</summary>
            <pre>
                    {errorInfo.componentStack}
                </pre>
          </details>
        )}
        {error && (
          <details className="smaller">
            <pre>
              {error.status && <>{`Status: ${error.status}`}<br/><br/></>}
              {error.stack && <>{`Stack: ${error.stack}`}<br/><br/></>}
            </pre>
          </details>
        )}
      </div>;
    }
    return children;
  }
}

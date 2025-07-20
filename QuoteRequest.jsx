import QuoteForm from '../components/QuoteForm';
import './QuoteRequest.css';

const QuoteRequest = () => {
  return (
    <div className="quote-request-page">
      <div className="page-header">
        <h1>Request a Quote</h1>
        <p>Get a customized sanitization service quote for your specific needs</p>
      </div>
      <QuoteForm />
    </div>
  );
};

export default QuoteRequest;
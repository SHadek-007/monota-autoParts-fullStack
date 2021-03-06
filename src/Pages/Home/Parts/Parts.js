import useProducts from '../../../hooks/useProducts';
import SingleParts from './SingleParts';

const Parts = () => {
    const [parts, setParts] = useProducts();
    
    return (
        <div>
            
            <h2 className="text-4xl md:text-5xl text-center font-semibold mt-16 mb-5 hover:text-secondary">Recent Products</h2>
            <p className='text-center text-xl mb-9'>We have provide all new car accessories and auto parts for your car in our store.</p>
            {parts.length <= 0 && (
        <div className="flex items-center justify-center ">
          <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      )}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {
                parts.map(singleParts => <SingleParts key={singleParts._id} singleParts={singleParts}></SingleParts>)
            }
        </div>
        </div>
    );
};

export default Parts;
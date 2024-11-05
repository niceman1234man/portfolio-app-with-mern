import React, { useState, useEffect } from "react";
import axios from "axios";

function Service() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const result = await axios.get("http://localhost:9000/home/service");
        setServices(result.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full bg-slate-500 py-16 text-white font-semibold">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-center text-3xl">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div className="w-full shadow-xl py-8 px-2" key={service._id}>
              <h1 className="text-center font-bold text-2xl py-4">
                {service.name}
              </h1>
              <p className="p-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;

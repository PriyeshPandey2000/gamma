import React from 'react';

const BulletPoints = () => {
  return (
    <div className="flex items-center">
      <div className="mr-4" style={{ marginTop: '-4px' }}> {/* Reduced margin and negative margin top */}
        <img src="/images/bullet.png" alt="Bullet Points" className="h-28" /> {/* Reduced height to h-28 */}
      </div>
      <div>
        <h2 className="mb-3 mt-2 text-sm">Enroll With Us</h2> {/* Increased margin top and bottom */}
        <h2 className="mb-3 mt-2 text-sm">Learn development from the best mentors </h2> {/* Increased margin top and bottom */}
        <h2 className="mb-3 mt-2 text-sm">Make amazing projects</h2> {/* Increased margin top and bottom */}
        <h2 className="mb-3 mt-2 text-sm">Get Placed</h2> {/* Increased margin top and bottom */}
      </div>
    </div>
  );
};

export default BulletPoints;

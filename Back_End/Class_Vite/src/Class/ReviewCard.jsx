import React from "react";

const ReviewCardList = () => {
    const collegeData = [
        {
            name: "Jagath",
            avatar: "https://i.pravatar.cc/150?img=1",
            college: "K L University",
            dept: "Computer Science",
            rating: 5,
            review: "Super for placements",
            date: "12.12.2025"
        },
        {
            name: "Amthan",
            avatar: "https://i.pravatar.cc/150?img=2",
            college: "Leading University",
            dept: "Information Technology",
            rating: 3,
            review: "Good for teachers",
            date: "11.12.2025"
        },
        {
            name: "Ashok",
            avatar: "https://i.pravatar.cc/150?img=3",
            college: "Thiruvalluvar University",
            dept: "Mech",
            rating: 4,
            review: "Excellent learning environment",
            date: "14.12.2025"
        },
        {
            name: "Pugazh",
            avatar: "https://i.pravatar.cc/150?img=4",
            college: "Kamaraj University",
            dept: "Computer Science",
            rating: 3,
            review: "Great placement opportunities",
            date: "14.12.2025"
        },
        {
            name: "Srikanth",
            avatar: "https://i.pravatar.cc/150?img=5",
            college: "Annamalai University",
            dept: "ECE",
            rating: 3,
            review: "Good infrastructure and placements",
            date: "17.12.2025"
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Student Reviews</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collegeData.map((student, index) => (
                    <div key={index} className="max-w-md bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
                        {/* Header */}
                        <div className="flex items-center gap-4">
                            <img
                                src={student.avatar}
                                alt={student.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-900">{student.name}</h3>
                                <p className="text-sm text-gray-500">{student.dept} - {student.college}</p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mt-3">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    className={
                                        i < student.rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                    }
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                            <span className="text-sm text-gray-500 ml-2">{student.date}</span>
                        </div>

                        {/* Review Text */}
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            {student.review}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewCardList;
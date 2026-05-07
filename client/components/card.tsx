import React from 'react'
import type { LucideIcon } from 'lucide-react'

interface Cardprops {
    color: string;
    title: string;
    value: string;
    icon: LucideIcon;
}

const colorClasses: { [key: string]: { bg: string, icon: string } } = {
    ques: {
        bg: 'bg-linear-to-br from-indigo-50 to-indigo-100',
        icon: 'text-indigo-600'
    },
    mins: {
        bg: 'bg-linear-to-br from-purple-50 to-purple-100',
        icon: 'text-purple-600'
    },
    score: {
        bg: 'bg-linear-to-br from-green-50 to-green-100',
        icon: 'text-green-600'
    }
}

const card = ({ title, value, icon: Icon, color }: Cardprops) => {
    const styles = colorClasses[color];
    return (
        <div className={`p-6 rounded-xl shadow-md text-center ${styles.bg}`}>

            {/* Icon */}
            <div className="flex justify-center mb-3">
                <Icon className={`h-8 w-8 ${styles.icon}`} />
            </div>

            {/* Value */}
            <div className="text-2xl font-bold mb-1">
                {value}
            </div>

            {/* Title */}
            <div className="text-2xl font-medium">
                {title}
            </div>

        </div>
    )
}

export default card
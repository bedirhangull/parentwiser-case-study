import React from "react";
import { TouchableOpacity } from "react-native";

interface ISortButton {
    onPress: () => void
    icon: () => React.ReactNode
    className?: string
}

const SortButton = (props: ISortButton) => {

    const { onPress, icon, className } = props;

    return(
        <TouchableOpacity className="flex justify-center items-center h-12 w-12 rounded-xl p-4 border-neutral-200 border-2 mx-2" onPress={onPress}>
            {icon()}
        </TouchableOpacity>
    )
}

export default SortButton;
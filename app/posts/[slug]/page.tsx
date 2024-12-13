import { use } from "react";

interface SingleParams {
    params: Promise<{ slug: string }>
}

export default function Page({ params }: SingleParams) {

    const { slug } = use(params);

    return (
        <div>
            {slug}
            <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />
        </div>
    )
}
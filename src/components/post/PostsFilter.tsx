import {Select} from "../select/Select";
import {EPostsSorting} from "../../model/EPostsSorting";
import {Input} from "../input/Input";
import {PostsFiltersDTO} from "../../model/PostsFiltersDTO";

type PostsFilterProps = {
    filter: PostsFiltersDTO,
    setFilter: (filter: PostsFiltersDTO) => void
}

export const PostsFilter = (props: PostsFilterProps) => {
    return (
        <div>
            <Select
                onChange={e => props.setFilter({...props.filter, sorting: e.target.value as unknown as EPostsSorting})}
                initialValue={"Sort..."}
                options={[
                {label: "By title", value: EPostsSorting.Title},
                {label: "By content", value: EPostsSorting.Body},
            ]}/>
            <Input
                onChange={e => props.setFilter({...props.filter, search: e.target.value})}
                placeholder={"Search..."}>
            </Input>
        </div>
    );
};
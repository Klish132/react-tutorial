import Select from "../select/Select";
import {EPostsSorting} from "../../model/EPostsSorting";
import Input from "../input/Input";
import {PostsFiltersDTO} from "../../model/PostsFiltersDTO";

type PostsFilterProps = {
    filter: PostsFiltersDTO,
    setFilter: (filter: PostsFiltersDTO) => void
}

const PostsFilter = (props: PostsFilterProps) => {
    return (
        <div>
            <Select
                value={props.filter.sorting}
                onChange={e => props.setFilter({...props.filter, sorting: e.target.value as unknown as EPostsSorting})}
                initialValue={"Posts sorting"} options={[
                {label: "By title", value: EPostsSorting.Title},
                {label: "By content", value: EPostsSorting.Content},
            ]}/>
            <Input
                value={props.filter.search}
                onChange={e => props.setFilter({...props.filter, search: e.target.value})}
                placeholder={"Search..."}>
            </Input>
        </div>
    );
};

export default PostsFilter;
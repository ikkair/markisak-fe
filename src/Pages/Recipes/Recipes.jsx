import React, { useState } from 'react';
import Card from '../../Components/Profile/Card';
import { useGetAllRecipeQuery } from '../../Features/recipe/recipeApi';
import MainLayout from './../../Components/Layout/MainLayout/MainLayout';
import { useSearchParams } from 'react-router-dom';
import style from './style.module.css';

const Recipes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [utils, setUtils] = useState({
    search: searchParams.get('search'),
    page: searchParams.get('page'),
    limit: searchParams.get('limit'),
    sortBy: searchParams.get('sortBy'),
    sort: searchParams.get('sort') || 'desc',
  });

  const handleSorting = (e) => {
    setUtils((prev) => {
      return {
        ...prev,
        sort: e.target.value,
      };
    });
  };

  const { data: recipes, isLoading } = useGetAllRecipeQuery({ search: utils.search, page: utils.page, limit: utils.limit, sortBy: utils.sortBy, sort: utils.sort });

  return (
    <MainLayout>
      <div className={`${style.mainRow} pt-3 row`}>
        <div className="col-12">
          <div className="container">
            <h1 className="mb-3 pt-3">Recipes</h1>

            <div className="row">
              <div className="col-12 mb-3">
                <div className="row">
                  <div className="col-7 col-md-4">
                    <select class="form-select" name="sort" onChange={handleSorting} aria-label="Default select example">
                      <option selected disabled>
                        Sort
                      </option>
                      <option value="desc">Newest</option>
                      <option value="asc">Oldest</option>
                    </select>
                  </div>
                </div>
              </div>

              {isLoading
                ? 'Loading......'
                : recipes?.data?.map((recipe) => (
                    <div key={recipe.id} className="col-6 col-md-3">
                      <Card item={recipe} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Recipes;

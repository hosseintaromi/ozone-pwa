<p align="center">
  <a href="https://github.com/SolgiDeveloper">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://toppng.com/uploads/preview/octocat-filled-icon-github-icon-svg-11553443886f4krecogcv.png">
      <img src="https://toppng.com/uploads/preview/octocat-filled-icon-github-icon-svg-11553443886f4krecogcv.png" height="128">
    </picture>
    <h1 align="center">Documentation</h1>
  </a>
</p>

## Table of Contents

| No. | **Project Structure**                         |
|-----|-----------------------------------------------|
| 1   | [app directory](#app-directory)               |
| 2   | [components directory](#components-directory) |
| 3   | [services directory](#services-directory)     |
| 4   | [constant directory](#constant-directory)     | 
| 5   | [request structure](#request-structure)       | 
| 6   | [commit-rules](#commit-rules)                 | 

                                                                    


1.  ### app directory
    the main part of this pwa project is separation of concerns, first of all is **app** folder based on [next.js app router](https://nextjs.org/docs/app) we specify all route with just
    folders with specific name. for instance **about us** page created with folder named **about-us** and inside the folder must be a page.tsx file.
    in page.tsx file just return **components** of the page without any logic etc ... , this file intend to be pure and plain.

    example:
    ```jsx harmony
       export default async function About() {
          return <AboutComponents />;
       }
    ```

    Note: for some plain page like /not-found/ page just create  name.tsx file in app folder.

    if we have nested route (ex: kian), just add folder inside our current folder with page.tsx (perform above rules ) and it will be rendered as about-us/kian.

    for [dynamic routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) add folder name inside [ ], for instance [station] folder in gas-station route.


2.  ### components directory 
    in this folder we have [@base](), [app](), [shared]() folders.
    
    [@base]() :all reusable and logic less components (ex: button, card, badge ...), inside each folder must be page.tsx and type.ts files.
    
    [app]() :all components of each folder in src/app with corresponding name created in this folder, for example about folder added here and have its own components for with nested static or dynamic page folders.
    
    [shared]() : components in this folder will be reusable and shared in all app folders and in the other hand this components have their own logics.


    Note: if we have specific share component in some page, just add @shared folder for holding that files inside page route folder component. 
    (ex: src/components/app/home/components/default/@shared)

**[⬆ Back to Top](#table-of-contents)**

3. ### services directory
    there is 2 type of service folder:

    a. src/components/shared/services: all share request may used in cross app will be here
        
    b. src/components/app/(folder-name)/services: all request may used in page and in **all** nested page
 
4. ### constant directory
   every string in our app will be stored here and imported from here, **there is no hard code string in every file in any situation**

   also all routes in our apis will be stored at [routes.ts]() file

5. ### request structure
    a. service hook template
    ```jsx harmony
        export function useGetFuelStation(id) {
          return useQuery({
            queryFn: () => getFuelStation(id),
            queryKey: [GET_FUEL_STATION, id],
          });
        }
    ```
    b.service endpoint template
    ```jsx harmony
        export async function getFuelStation(id: FuelStationIdType) {
          const {
            data: { data },
          }: { data: { data: GasStationModel } } = await axios.get(
            APIUrlGenerator(API_ROUTES.GET_FUEL_STATION(id)),
          );
          return data;
        }
    ```
   what is **APIUrlGenerator** ? 
        
    the argument of this function is (route: string, qry?: object), as you see this function get
    route and queries and under the hood create our url, for queries just need to send object with key value pair of our query keys

    **Hint**: **Namification** : for naming our hooks add **use** keyword to axios method name (ex: [GET](), [POST](), [PUT](), [PATCH](), [DELETE]()) and function name like [useGetFuelStations]()
    
    and for service naming just remove **use** keyword in above Namification

    **=> example for hook naming:**

   [useGetFuelStation](), [usePostLogin](), [useDeleteCar]()

   **=> example for service naming:**

    [getFuelStation](), [getLiveVote](), [postVote]()


**[⬆ Back to Top](#table-of-contents)**

6. ### commit rules
    all commits must be categorized  in the below blue prints

    **[-ref]() :** refactor message

    **[-fix]() :** bug fix message

    **[-hotFix]() :** hotfix message

    **[-feat]() :** feature message

    **[-style]() :** structural manipulation message
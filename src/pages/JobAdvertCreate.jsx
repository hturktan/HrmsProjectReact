import React, { useEffect, useState } from 'react'
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import WorkingHourService from "../services/workingHourService";
import WorkingTypeService from "../services/workingTypeService";
import JobAdvertService from "../services/jobAdvertService";
import { Formik } from 'formik';
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import RoundedBox from "../layouts/RoundedBox";
import ShadowBox from "../layouts/ShadowBox";

export default function JobAdvertCreate() {
    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [workHours, setWorkHours] = useState([])
    const [workTypes, setWorkTypes] = useState([])

    useEffect(() => {
        let cityService = new CityService();
        let jobPositionService = new JobPositionService();
        let workingHourService = new WorkingHourService();
        let workingTypeService = new WorkingTypeService();

        cityService.getCities().then((result) => setCities(result.data.data));
        jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data));
        workingHourService.getWorkingHours().then((result) => setWorkHours(result.data.data));
        WorkingTypeService.getWorkingTypes().then((result) => setWorkTypes(result.data.data));
    }, []);

    const history = useHistory();

    const jobAdvertService = new JobAdvertService();

    return (
        <div style={{ paddingTop: 100 }}>
        <div className="row  margintop">
          <div className="col">
            <div style={{ padding: 20 }}>
              <Formik
                initialValues={{
                  appealExpirationDate: "",
                  cityId: "",
                  description: "",
                  employerId: "",
                  jobpositionId: "",
                  maxSalary: "",
                  minSalary: "",
                  openposition: "",
                  workHourId: "",
                  workTypeId: "",
                }}
                validationSchema={Yup.object({
                  description: Yup.string().required(
                    "Description cannot be empty"
                  ),
                  minSalary: Yup.number()
                    .typeError("Text is not acceptable !")
                    .required("Cannot be null"),
                  maxSalary: Yup.number()
                    .typeError("Text is not acceptable !")
                    .required("Cannot be null"),
                  cityId: Yup.number().required("Has to be filled up!"),
                  jobtitleId: Yup.number().required("Has to be filled up!"),
                  workHourId: Yup.number().required("Has to be filled up!"),
                  workTypeId: Yup.number().required("Has to be filled up!"),
                  quota: Yup.number().typeError("Text is not acceptable !").min(1, "Number should be at least 1").required("Has to be filled up!"),
                })}
                onSubmit={(
                  values,
                  { setSubmitting, setErrors, setStatus, resetForm }
                ) => {
  
                  //Transformed Values
                  values.jobtitleId = parseInt(values.jobtitleId);
                  values.workHourId = parseInt(values.workHourId);
                  values.workTypeId = parseInt(values.workTypeId);
                  values.cityId = parseInt(values.cityId);
                  values.openposition = parseInt(values.openposition);
                  values.minSalary = parseInt(values.minSalary);
                  values.maxSalary = parseInt(values.maxSalary);
                  values.employerId = 3; // auth yapmadığımız için kendim default id setledim
                  //Transformed Values End
  
  
                  jobAdvertisementService.add(values).then((data)=>{
                      console.log(data)
                      history.push("/jobadverts")
                  })
                  
                }}
              >
                {({
                  values,
                  touched,
                  errors,
                  dirty,
                  isSubmitting,
                  handleSubmit,
                  handleReset,
                  handleBlur,
                  handleChange,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="jobads-right">
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn-softpink"
                          style={{ marginRight: 10 }}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={!dirty || isSubmitting}
                          className="btn-lightblue"
                          style={{ marginRight: 10 }}
                        >
                          Create
                        </button>
                      </div>
                    </div>
                    <ShadowBox margined={20}>
                      <div className="d-flex justify-content-between">
                        <div className="f-1 d-flex flex-column">
                          <strong style={{ marginBottom: 10 }}>Şehir</strong>
                          <div className="custom-select jobads-right ">
                            <select
                              className="rounded"
                              id="cityId"
                              name="cityId"
                              value={values.cityId}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value="" label="Choose City" />
                              {cities.map((data, index) => (
                                <option key={index} value={data.id}>
                                  {data.cityName}
                                </option>
                              ))}
                            </select>
                            <span className="custom-arrow" />
                          </div>
                          {errors.cityId && touched.cityId ? (
                            <div className="input-feedback">{errors.cityId}</div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="f-1  d-flex flex-column">
                          <strong style={{ marginBottom: 10 }}>Position</strong>
                          <div className="custom-select jobads-right ">
                            <select
                              className="rounded"
                              name="jobtitleId"
                              value={values.jobtitleId}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value="" label="Choose Position" />
                              {titles.map((data, index) => (
                                <option
                                  key={index}
                                  value={data.id}
                                  label={data.title}
                                >
                                  {data.title}
                                </option>
                              ))}
                            </select>
                            <span className="custom-arrow" />
                          </div>
                          {errors.jobtitleId && touched.jobtitleId ? (
                            <div className="input-feedback">
                              {errors.jobtitleId}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <div className="f-1 d-flex flex-column">
                          <strong style={{ marginBottom: 10 }}>
                            Minimum Salary
                          </strong>
                          <div className="jobads-right ">
                            <input
                              type="text"
                              className="rounded"
                              name="minSalary"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              values={values.minSalary}
                            />
                          </div>
                          {errors.minSalary && touched.minSalary ? (
                            <div className="input-feedback">
                              {errors.minSalary}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="f-1  d-flex flex-column">
                          <strong style={{ marginBottom: 10 }}>
                            Maximum Salary
                          </strong>
                          <div className=" jobads-right ">
                            <input
                              type="text"
                              className="rounded"
                              name="maxSalary"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              values={values.maxSalary}
                            />
                          </div>
                          {errors.maxSalary && touched.maxSalary ? (
                            <div className="input-feedback">
                              {errors.maxSalary}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <div className="f-1 d-flex flex-column">
                          <strong style={{ marginBottom: 10 }}>Work Type/strong>
                          <div className="custom-select jobads-right ">
                            <select
                              className="rounded"
                              name="workHourId"
                              value={values.workHourId}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              {hours.map((data, index) => (
                                <option
                                  key={index}
                                  value={data.id}
                                  label={data.workHours}
                                >
                                  {data.workHours}
                                </option>
                              ))}
                            </select>
                            <span className="custom-arrow" />
                          </div>
                        </div>
                        <div className="f-1  d-flex flex-column">
                          <strong style={{ marginBottom: 10 }}>
                            Working Hour
                          </strong>
                          <div className="custom-select jobads-right ">
                            <select
                              className="rounded"
                              name="workTypeId"
                              value={values.workTypeId}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              {types.map((data, index) => (
                                <option
                                  key={index}
                                  value={data.id}
                                  label={data.workType}
                                >
                                  {data.workType}
                                </option>
                              ))}
                            </select>
                            <span className="custom-arrow" />
                          </div>
                        </div>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <div className="f-1 d-flex flex-column">
                          <strong style={{ marginBottom: 10 }}>
                            Deadline
                          </strong>
                          <div className="jobads-right ">
                            
                          <input
                           name="appealExpirationDate"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           values={values.appealExpirationDate}
  
                            class="form-control"
                            type="datetime-local"
                            id="appealExpirationDate"
                          />
                          </div>
                          {errors.appealExpirationDate && touched.appealExpirationDate ? (
                            <div className="input-feedback">
                              {errors.appealExpirationDate}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
  
                      
                      <div className="f-1 d-flex flex-column">
                        <strong style={{ marginBottom: 10 }}>Number of Open Position</strong>
                        <div className="jobads-right ">
                          <input
                            name="quota"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.quota[0] || ""}
                            type="text"
                            className="rounded"
                          />
                        </div>
                        {errors.quota && touched.quota ? (
                          <div className="input-feedback">
                            {errors.quota}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
  
  
                      <div className="f-1 d-flex flex-column">
                        <strong style={{ marginBottom: 10 }}>Description</strong>
                        <div className="jobads-right ">
                          <textarea
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.description[0] || ""}
                            type="text"
                            className="rounded"
                          />
                        </div>
                        {errors.description && touched.description ? (
                          <div className="input-feedback">
                            {errors.description}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
  
                    </ShadowBox>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    )
}

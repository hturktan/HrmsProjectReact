import React, { useEffect, useState } from 'react'
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import WorkingHourService from "../services/workingHourService";
import WorkingTypeService from "../services/workingTypeService";
import JobAdvertService from "../services/jobAdvertService";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

export default function JobAdvertCreate() {
  let jobAdvertService = new JobAdvertService();
  const JobAdvertCreateSchema = Yup.object().shape({
    deadLine: Yup.date().nullable().required("This area has to be filled"),
    description: Yup.string().required("This area has to be filled"),
    jobPositionId: Yup.string().required("This area has to be filled"),
    workingHourId: Yup.string().required("This area has to be filled"),
    workingTypeId: Yup.string().required("This area has to be filled"),
    openPositions: Yup.string().required("This area has to be filled").min(1,"Position number has to be minimum 1"),
    cityId: Yup.string().required("This area has to be filled"),
    salaryMin: Yup.number().min(0,"This has to be minimum Zero").required("This area has to be filled"),
    salaryMax: Yup.number().min(0,"This has to be minimum Zero").required("This area has to be filled")
  });

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      description: "",
      jobPositionId: "",
      workingHourId: "",
      workingTypeId: "",
      numberOfOpenPositions: "",
      cityId: "",
      salaryMin: "",
      salaryMax: "",
      deadLine: "",
    },
    validationSchema: JobAdvertCreateSchema,
    onSubmit: (values) => {
      values.employerId = 39;
      jobAdvertService.add(values).then((result) => console.log(result.data.data));
      alert("New Job Advert will be added after the confirmation by staff");
      history.push("/jobadverts");
    },
  });

  const [workingHours, setWorkingHours] = useState([]);
  const [workingTypes, setWorkingTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let workingHourService = new WorkingHourService();
    let workingTypeService = new WorkingTypeService();
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();

    workingHourService.getWorkingHours().then((result) => setWorkingHours(result.data.data));
    workingTypeService.getWorkingTypes().then((result) => setWorkingTypes(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data));
  }, []);

  const workingHourOption = workingHours.map((workingHours, index) => ({
    key: index,
    text: workingHours.name,
    value: workingHours.id,
  }));
  const workingTypeOption = workingTypes.map((workingTypes, index) => ({
    key: index,
    text: workingTypes.name,
    value: workingTypes.id,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));
  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.name,
    value: jobPosition.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

    return (
      <div>
      <Card fluid>
      <Card.Content header='Add Job Advert' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
        <Dropdown
          clearable
          item
          placeholder="Job Position"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "jobPositionId")
          }
          onBlur={formik.onBlur}
          id="jobPositionId"
          value={formik.values.jobPositionId}
          options={jobPositionOption}
          />
          {formik.errors.jobPositionId && formik.touched.jobPositionId &&(
            <div className={"ui pointing red basic label"}>
              {formik.errors.jobPositionId}
            </div>
          )}
          </Form.Field>
          <Form.Field>
            <Dropdown
              clearable
              item
              placeholder="City"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                {formik.errors.cityId}
              </div>
              )}
          </Form.Field>
          <Form.Field>
          <Dropdown
                  clearable
                  item
                  placeholder="Working Type"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workingTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="workingTypeId"
                  value={formik.values.workingTypeId}
                  options={workingTypeOption}
                />
                {formik.errors.workingTypeId && formik.touched.workingTypeId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workingTypeId}
                  </div>
                )}
          </Form.Field>
          <Form.Field>
                <Dropdown
                  clearable
                  item
                  placeholder="Working Hour"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workingHourId")
                  }
                  onBlur={formik.onBlur}
                  id="workingHourId"
                  value={formik.values.workingHourId}
                  options={workingHourOption}
                />
                {formik.errors.workingHourId && formik.touched.workingHourId && (
                  <div className={"ui pointing red basic label"}>{formik.errors.workingHourId}</div>
                )}
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Minimum Salary"
                  value={formik.values.salaryMin}
                  name="salaryMin"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.salaryMin && formik.touched.salaryMin && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.salaryMin}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maximum Salary"
                  value={formik.values.salaryMax}
                  name="salaryMax"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.salaryMax && formik.touched.salaryMax && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.salaryMax}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  id="openPositions"
                  name="openPositions"
                  error={Boolean(formik.errors.openPositions)}
                  onChange={formik.handleChange}
                  value={formik.values.openPositions}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Number(s) of Open Position"
                />
                {formik.errors.openPositions && formik.touched.openPositions && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.openPositions}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.deadLine)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "deadLine")
                  }
                  value={formik.values.deadLine}
                  onBlur={formik.handleBlur}
                  name="deadLine"
                  placeholder="Son başvuru tarihi"
                />
                {formik.errors.deadLine && formik.touched.deadLine && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.deadLine}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <TextArea
                  placeholder="Description"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
              </Form.Field>
              <Button
                content="Add"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
      </Form>
      </Card.Content>
      </Card>
    </div>
     
    )
}

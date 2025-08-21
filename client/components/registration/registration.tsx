import React, { useState } from "react";
import {
  X,
  Plus,
  Building,
  Table,
  Check,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  // Modal Components
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalHeaderContent,
  ModalTitle,
  ModalSubtitle,
  ModalBadge,
  CloseButton,
  ProgressBar,
  ProgressContainer,
  StepContainer,
  StepCircle,
  StepInfo,
  StepTitle,
  StepDescription,
  ProgressLine,
  Content,
  FormContainer,
  FormGroup,
  Label,
  Input,
  Select,
  HelpText,
  Button,
  Footer,
  CompletionContainer,
  CompletionIcon,
  CompletionTitle,
  CompletionText,
  // Column Config Components
  ResponsiveColumnConfigFormContainer,
  ResponsiveFormRow,
  ResponsiveFormGroup,
  ResponsiveFormGroupToggle,
  FormLabel,
  FormInput,
  FormSelect,
  FilterSection,
  FilterInputGroup,
  ResponsiveFilterTags,
  ResponsiveFilterTag,
  TagRemove,
  ShimmerBlock,
} from "./style";
import { ColumnConfigRow } from "./column-config-row";

interface ColumnDefinition {
  id: string;
  placeholder: string;
  name: string;
  dataType: string;
  hide: boolean;
  filterColumns: boolean;
  searchable: boolean;
  filterValues: string[];
}

interface RegistrationStepperModalRequest {
  businessName: string;
  bussId: string;
  bussPrefix: string;
  fields: {
    label: string;
    columnType: string;
    filterable: boolean;
    hidden: boolean;
  }[];
}

interface OrganizationData {
  organizationName: string;
  organizationId: string;
  tablePrefix: string;
}

export default function RegistrationStepperModal() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for back

  const [organizationData, setOrganizationData] = useState<OrganizationData>({
    organizationName: "",
    organizationId: "",
    tablePrefix: "",
  });

  const [columns, setColumns] = useState<ColumnDefinition[]>([
    {
      id: "1",
      name: "",
      placeholder: "Enter Column Name",
      dataType: "Text",
      hide: false,
      filterColumns: false,
    },
  ]);

  const steps = [
    {
      id: 1,
      title: "Organization Setup",
      description: "Configure your organization",
      icon: Building,
    },
    {
      id: 2,
      title: "Define Table Columns",
      description: "Set up your table structure",
      icon: Table,
    },
  ];

  const columnTypes = [
    { label: "Text", value: "STRING" },
    { label: "Number", value: "NUMBER" },
    { label: "Timestamp", value: "TIMESTAMP" },
    { label: "Boolean", value: "BOOLEAN" },
  ];

  const updateOrganizationData = (
    field: keyof OrganizationData,
    value: string
  ) => {
    setOrganizationData((prev) => ({ ...prev, [field]: value }));
  };

  const addColumn = () => {
    const newColumn: ColumnDefinition = {
      id: Date.now().toString(),
      name: "",
      placeholder: "Enter Column Name",
      dataType: "",
      hide: false,
      filterColumns: false,
    };
    setColumns([...columns, newColumn]);
  };

  const updateColumn = (
    id: string,
    field: keyof ColumnDefinition,
    value: string | boolean
  ) => {
    setColumns(
      columns.map((col) => (col.id === id ? { ...col, [field]: value } : col))
    );
  };

  const removeColumn = (id: string) => {
    if (columns.length > 1) {
      setColumns(columns.filter((col) => col.id !== id));
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const triggerRegistrationStepperModal = () => {
    const payload: RegistrationStepperModalRequest = {
      businessName: organizationData.organizationName,
      bussId: organizationData.organizationId,
      bussPrefix: organizationData.tablePrefix,
      fields: columns.map((col) => ({
        label: col.name,
        columnType: col.dataType.toUpperCase(),
        filterable: col.filterColumns,
        hidden: col.hide,
      })),
    };

    // Mock API call for now
    console.log("Registration payload:", payload);
    setIsCompleted(true);

    setTimeout(() => {
      // router.push('/home');
      console.log("Redirecting to home...");
    }, 1000);
  };

  const isStep1Valid =
    organizationData.organizationName &&
    organizationData.organizationId &&
    organizationData.tablePrefix;
  const isStep2Valid =
    columns.length > 0 && columns.every((col) => col.name && col.dataType);

  return (
    <Overlay>
      <ModalContainer>
        {isCompleted ? (
          <CompletionContainer>
            <CompletionIcon>
              <CheckCircle size={32} color="#16a34a" />
            </CompletionIcon>
            <CompletionTitle>Table Created!</CompletionTitle>
            <CompletionText>
              Your table configuration has been saved successfully.
            </CompletionText>
          </CompletionContainer>
        ) : (
          <>
            {/* Header */}
            <ModalHeader>
              <ModalHeaderContent>
                <ModalTitle>{steps[currentStep - 1].title}</ModalTitle>
                <ModalSubtitle>
                  {steps[currentStep - 1].description}
                </ModalSubtitle>
              </ModalHeaderContent>
              <ModalBadge>
                Step {currentStep} of {steps.length}
              </ModalBadge>
            </ModalHeader>

            {/* Progress Bar */}
            <ProgressBar>
              <ProgressContainer>
                {steps.map((step, index) => {
                  const isActive = step.id === currentStep;
                  const isCompleted = step.id < currentStep;
                  const StepIcon = step.icon;

                  return (
                    <React.Fragment key={step.id}>
                      <StepContainer>
                        <StepCircle
                          isActive={isActive}
                          isCompleted={isCompleted}
                        >
                          {isCompleted ? (
                            <Check size={20} />
                          ) : (
                            <StepIcon size={20} />
                          )}
                        </StepCircle>
                        <StepInfo>
                          <StepTitle
                            isActive={isActive}
                            isCompleted={isCompleted}
                          >
                            {step.title}
                          </StepTitle>
                          <StepDescription>{step.description}</StepDescription>
                        </StepInfo>
                      </StepContainer>

                      {index < steps.length - 1 && (
                        <ProgressLine isCompleted={currentStep > step.id} />
                      )}
                    </React.Fragment>
                  );
                })}
              </ProgressContainer>
            </ProgressBar>

            {/* Content */}
            <Content>
              <AnimatePresence mode="wait" custom={direction}>
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={{
                      enter: (direction: number) => ({
                        x: direction > 0 ? 300 : -300,
                        opacity: 0,
                      }),
                      center: {
                        zIndex: 1,
                        x: 0,
                        opacity: 1,
                      },
                      exit: (direction: number) => ({
                        zIndex: 0,
                        x: direction < 0 ? 300 : -300,
                        opacity: 0,
                      }),
                    }}
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                  >
                    <FormContainer>
                      <FormGroup>
                        <Label htmlFor="organizationName">
                          Organization Name *
                        </Label>
                        <Input
                          id="organizationName"
                          value={organizationData.organizationName}
                          onChange={(e) =>
                            updateOrganizationData(
                              "organizationName",
                              e.target.value
                            )
                          }
                          placeholder="Enter your organization name"
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label htmlFor="organizationId">
                          Organization ID *
                        </Label>
                        <Input
                          id="organizationId"
                          value={organizationData.organizationId}
                          onChange={(e) =>
                            updateOrganizationData(
                              "organizationId",
                              e.target.value
                            )
                          }
                          placeholder="Enter organization ID (e.g., org_12345)"
                        />
                        <HelpText>
                          This will be used as a unique identifier for your
                          organization
                        </HelpText>
                      </FormGroup>

                      <FormGroup>
                        <Label htmlFor="tablePrefix">Table Prefix *</Label>
                        <Input
                          id="tablePrefix"
                          value={organizationData.tablePrefix}
                          onChange={(e) =>
                            updateOrganizationData(
                              "tablePrefix",
                              e.target.value
                            )
                          }
                          placeholder="Enter table prefix (e.g., usr_)"
                        />
                        <HelpText>
                          This prefix will be added to all table names for
                          organization
                        </HelpText>
                      </FormGroup>
                    </FormContainer>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={{
                      enter: (direction: number) => ({
                        x: direction > 0 ? 300 : -300,
                        opacity: 0,
                      }),
                      center: {
                        zIndex: 1,
                        x: 0,
                        opacity: 1,
                      },
                      exit: (direction: number) => ({
                        zIndex: 0,
                        x: direction < 0 ? 300 : -300,
                        opacity: 0,
                      }),
                    }}
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                  >
                    <ResponsiveColumnConfigFormContainer>
                      {columns.map((column) => (
                        <div key={column.id} style={{ marginBottom: "24px" }}>
                          <ColumnConfigRow
                            config={{
                              label: column.name,
                              columnName: column.name,
                              columnType: column.dataType as any,
                              filterable: column.filterColumns,
                              hidden: column.hide,
                              searchable: false,
                              filterValues: [],
                            }}
                            columnTypes={columnTypes}
                            updateConfig={(updates) => {
                              if (updates.label !== undefined) {
                                updateColumn(column.id, "name", updates.label);
                              }
                              if (updates.columnType !== undefined) {
                                updateColumn(column.id, "dataType", updates.columnType);
                              }
                              if (updates.filterable !== undefined) {
                                updateColumn(column.id, "filterColumns", updates.filterable);
                              }
                              if (updates.hidden !== undefined) {
                                updateColumn(column.id, "hide", updates.hidden);
                              }
                            }}
                            isEdit={false}
                            onRemove={columns.length > 1 ? () => removeColumn(column.id) : undefined}
                          />
                        </div>
                      ))}

                      <div style={{ marginTop: "1.5rem" }}>
                        <Button variant="secondary" onClick={addColumn}>
                          <Plus size={16} />
                          Add Column
                        </Button>
                      </div>
                    </ResponsiveColumnConfigFormContainer>
                  </motion.div>
                )}
              </AnimatePresence>
            </Content>

            {/* Footer */}
            <Footer>
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                <ArrowLeft size={16} />
                Back
              </Button>

              {currentStep < steps.length ? (
                <Button
                  variant="primary"
                  onClick={handleNext}
                  disabled={currentStep === 1 ? !isStep1Valid : !isStep2Valid}
                >
                  Next
                  <ArrowRight size={16} />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={triggerRegistrationStepperModal}
                  disabled={!isStep2Valid}
                >
                  Create Table
                  <Check size={16} />
                </Button>
              )}
            </Footer>
          </>
        )}
      </ModalContainer>
    </Overlay>
  );
}
